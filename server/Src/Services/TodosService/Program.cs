using Infrastructure.ServiceDiscovery;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using TodosService.Persistent;

var builder = WebApplication.CreateBuilder(args);

builder.Services.RegisterConsulServices(builder.Configuration.GetServiceConfig());

builder.Services.AddDbContextPool<TodosDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
        .UseLazyLoadingProxies();
});

builder.Services.AddControllers();

builder.Services.AddSwaggerGen();

builder.Services.AddMediatR(Assembly.GetExecutingAssembly());

var app = builder.Build();

app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var context = services.GetRequiredService<TodosDbContext>();

        if (context.Database.IsNpgsql())
        {
            context.Database.Migrate();
        }
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

        logger.LogError(ex, "An error occurred while migrating or seeding the database.");

        throw;
    }
}

await app.RunAsync();
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

builder.Services.AddMediatR(Assembly.GetExecutingAssembly());

var app = builder.Build();

app.MapControllers();

app.Run();
using API.Configurations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.ConfigureVersioning();
builder.Services.ConfigureSwagger();
builder.Services.ConfigureCors();

var app = builder.Build();

app.UseConfiguredSwagger();
app.UseConfiguredCors();
app.UseAuthorization();
app.MapControllers();

app.Run();

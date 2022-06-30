using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using Ocelot.Provider.Consul;

namespace API.Gateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .ConfigureAppConfiguration((context, config) =>
                {
                    config.SetBasePath(context.HostingEnvironment.ContentRootPath)
                        .AddJsonFile("appsettings.json", true, true)
                        .AddJsonFile($"appsettings.{context.HostingEnvironment.EnvironmentName}.json", true, true)
                        .AddJsonFile("ocelot.json", optional: false, reloadOnChange: false)
                        .AddJsonFile($"ocelot.{context.HostingEnvironment.EnvironmentName}.json", optional: true)
                        .AddEnvironmentVariables();
                })
                .ConfigureServices((context, services) =>
                {
                    services.AddEndpointsApiExplorer();

                    services.AddOcelot().AddConsul();

                    services.AddSwaggerForOcelot(context.Configuration);
                })
                .ConfigureLogging((context, logging) =>
                {
                    logging.AddConsole();
                })
                .Configure(app =>
                {
                    app.UseSwaggerForOcelotUI(options =>
                    {
                        options.PathToSwaggerGenerator = "/swagger/docs";
                    })
                    .UseOcelot()
                    .Wait();
                })
                .Build()
                .Run();
        }
    }
}
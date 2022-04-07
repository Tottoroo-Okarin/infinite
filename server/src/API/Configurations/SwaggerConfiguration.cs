using Microsoft.OpenApi.Models;

namespace API.Configurations
{
    public static class SwaggerConfiguration
    {
        public static IServiceCollection ConfigureSwagger(this IServiceCollection services)
        {
            services.AddVersionedApiExplorer(options =>
            {
                options.GroupNameFormat = "'v'VVV";
                options.SubstituteApiVersionInUrl = true;
            });

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Todo List App API"
                });

            });

            return services;
        }

        public static IApplicationBuilder UseConfiguredSwagger(this WebApplication app)
        {
            if (!app.Environment.IsDevelopment()) return app;

            app.UseSwagger();
            app.UseSwaggerUI(options =>
            {
                options.DocumentTitle = "Todo List App API";
            });

            return app;
        }
    }
}

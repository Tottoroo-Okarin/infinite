namespace API.Configurations
{
    public static class CorsConfiguration
    {
        public static IServiceCollection ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p => p
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                );
                options.AddPolicy("Default", p => { });
            });

            return services;
        }

        public static IApplicationBuilder UseConfiguredCors(this WebApplication app)
        {
            app.UseCors(app.Environment.IsDevelopment() ? "AllowAll" : "Default");

            return app;
        }
    }
}

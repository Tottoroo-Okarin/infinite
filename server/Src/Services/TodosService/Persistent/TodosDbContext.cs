using Microsoft.EntityFrameworkCore;
using TodosService.Entities;

namespace TodosService.Persistent
{
    public class TodosDbContext : DbContext
    {
        private const string UUIDExtensionName = "uuid-ossp";

        public DbSet<Todo> Todos { get; set; }

        public TodosDbContext(DbContextOptions<TodosDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.HasPostgresExtension(UUIDExtensionName);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TodosDbContext).Assembly);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TodosService.Entities;

namespace TodosService.EntitiyConfigurations
{
    public class TodoConfiguration : IEntityTypeConfiguration<Todo>
    {
        public void Configure(EntityTypeBuilder<Todo> builder)
        {
            builder.ToTable("Todos");

            builder.HasKey(entity => entity.Id);

            //builder.Property(entity => entity.Id)
            //    .HasDefaultValueSql("uuid_generate_v4()");

            builder.Property(entity => entity.Title)
                .HasMaxLength(50)
                .IsRequired();

            builder.Property(entity => entity.Description)
                .HasMaxLength(300)
                .IsRequired(false);

            builder.Property(entity => entity.CompletedAt)
                .IsRequired(false);
        }
    }
}

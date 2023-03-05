using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace DAL.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            if (Database.IsRelational())
            {
                Database.Migrate();
            }
        }

        public DatabaseContext()
        {
            Database.Migrate();
        }

        public DbSet<EnglishWordEntity> EnglishWords { get; set; }
        public DbSet<EnglishTranslatedWordEntity> EnglishTranslatedWords { get; set; }
        public DbSet<TranslatedWordEntity> TranslatedWords { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DatabaseContext).Assembly);
        }
    }
}

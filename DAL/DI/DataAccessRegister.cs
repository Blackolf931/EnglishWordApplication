using DAL.Context;
using DAL.Entities;
using DAL.Interfaces;
using DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DAL.DI
{
    public static class DataAccessRegister
    {
        public static void AddDataAccess(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<IGenericRepository<EnglishTranslatedWordEntity>, GenericRepository<EnglishTranslatedWordEntity>>();
            services.AddScoped<IGenericRepository<EnglishWordEntity>, GenericRepository<EnglishWordEntity>>();
            services.AddScoped<IGenericRepository<TranslatedWordEntity>, GenericRepository<TranslatedWordEntity>>();
            services.AddDbContext<DatabaseContext>(op =>
                {
                    op.UseSqlServer(config.GetConnectionString("DefaultConnection"));
                }
            );
        }
    }
}

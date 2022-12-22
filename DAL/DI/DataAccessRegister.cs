using DAL.Context;
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
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<EnglishWordEntity>));
            services.AddDbContext<DatabaseContext>(op =>
                {
                    op.UseSqlServer(config.GetConnectionString("DefaultConnection"));
                }
            );
        }
    }
}

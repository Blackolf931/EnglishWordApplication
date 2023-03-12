using Bll.Interfaces;
using Bll.Models;
using Bll.Services;
using DAL.DI;
using DAL.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Bll.DI
{
    public static class BusinessLogicRegister
    {
        public static void AddBusinessLogicRegister(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IGenericService<EnglishTranslatedWordModel>, GenericService<EnglishTranslatedWordModel, EnglishTranslatedWordEntity>>();
            services.AddScoped<IWordService, WordsService>();
            services
                .AddScoped<IGenericService<TranslatedWordModel>,
                    GenericService<TranslatedWordModel, TranslatedWordEntity>>();
            services.AddDataAccess(configuration);
        }
    }
}

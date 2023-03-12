using AutoMapper;
using Bll.Models;
using DAL.Entities;

namespace Bll.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<EnglishWordModel, EnglishWordEntity>().ReverseMap()
                .ForMember(x => x.Word, y => y.MapFrom(z => z.EnglishWord));
            CreateMap<TranslatedWordModel, TranslatedWordEntity>().ReverseMap();
            CreateMap<EnglishTranslatedWordModel, EnglishTranslatedWordEntity>().ReverseMap();
        }
    }
}

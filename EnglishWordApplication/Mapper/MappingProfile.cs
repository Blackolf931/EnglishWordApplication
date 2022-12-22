using AutoMapper;
using Bll.Models;
using EnglishWordApplication.ViewModel;

namespace EnglishWordApplication.Mapper
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<EnglishWordModel, WordsViewModel>().ReverseMap();
            CreateMap<EnglishWordModel, CreateViewModel>().ReverseMap();
        }
    }
}

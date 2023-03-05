using AutoMapper;
using Bll.Models;
using EnglishWordApplication.ViewModel.EnglishTranslatedWordViewModel;
using EnglishWordApplication.ViewModel.EnglishWordViewModels;
using EnglishWordApplication.ViewModel.TranslatedWordViewModel;

namespace EnglishWordApplication.Mapper
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<EnglishWordViewModel, EnglishWordModel>().ReverseMap();
            CreateMap<TranslatedWord, TranslatedWordModel>().ReverseMap();
            CreateMap<EnglishTranslatedWord, EnglishTranslatedWordModel>().ReverseMap();
        }
    }
}

using AutoMapper;
using Bll.Models;
using EnglishWord.ViewModel.EnglishTranslatedWordViewModel;
using EnglishWord.ViewModel.EnglishWordViewModels;
using EnglishWord.ViewModel.TranslatedWordViewModel;

namespace EnglishWord.Mapper
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<EnglishWordViewModel, EnglishWordModel>().ReverseMap();
            CreateMap<TranslatedWordViewModel, TranslatedWordModel>().ReverseMap();
            CreateMap<EnglishTranslatedWordViewModel, EnglishTranslatedWordModel>().ReverseMap();
        }
    }
}

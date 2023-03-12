using AutoMapper;
using Bll.Models;
using EnglishWord.API.ViewModel.EnglishTranslatedWord;
using EnglishWord.API.ViewModel.EnglishWord;
using EnglishWord.API.ViewModel.TranslatedWordViewModel;

namespace EnglishWord.API.Mapper
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

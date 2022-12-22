using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using DAL.Entities;
using DAL.Interfaces;

namespace Bll.Services
{
    public class WordsService : GenericService<EnglishWordModel, EnglishWordEntity>, IWordService
    {
        private readonly IGenericRepository<EnglishWordEntity> _repository;
        private readonly IMapper _mapper;
        public WordsService(IGenericRepository<EnglishWordEntity> repository, IMapper mapper) : base(repository, mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public override async Task<IEnumerable<EnglishWordModel>> GetAll(CancellationToken ct)
        {
            var result = await _repository.GetAll(ct);
            var mappedObject = _mapper.Map<IEnumerable<EnglishWordModel>>(result).ToList();
            mappedObject.ForEach(x => x.TranslatedWords = GetTranslatedWordsList(mappedObject, x.TranslatedWord));
            return ShuffleArray(mappedObject);
        }

        private IEnumerable<string> GetTranslatedWordsList(IEnumerable<EnglishWordModel> englishWords, string correctTranslatedWord)
        {
            var result = englishWords.Where(x => x.TranslatedWord != correctTranslatedWord).Take(3).Select(x => x.TranslatedWord).ToList();
            result.Add(correctTranslatedWord);
            return ShuffleAnswersArray(result);
        }

        private IEnumerable<string> ShuffleAnswersArray(IEnumerable<string> words)
        {
            return words.OrderBy(_ => new Random().Next()).ToList();
        }

        private IEnumerable<EnglishWordModel> ShuffleArray(IEnumerable<EnglishWordModel> words)
        {
            return words.OrderBy(x => new Random().Next()).ToList();
        }
    }
}

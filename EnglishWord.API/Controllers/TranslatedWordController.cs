using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWord.ViewModel.TranslatedWordViewModel;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWord.API.Controllers
{
    [ApiController]
    [Route("TranslatedWordController")]
    public class TranslatedWordController : Controller
    {
        private readonly IGenericService<TranslatedWordModel> _translatedWordService;
        private readonly IMapper _mapper;

        public TranslatedWordController(IGenericService<TranslatedWordModel> translatedWordService, IMapper mapper)
        {
            _translatedWordService = translatedWordService;
            _mapper = mapper;
        }

        [HttpGet("GetAll")]
        public async Task<IEnumerable<TranslatedWordViewModel>> GetAll(CancellationToken ct)
        {
            var result = await _translatedWordService.GetAll(ct);
            return _mapper.Map<IEnumerable<TranslatedWordViewModel>>(result);
        }

        [HttpGet("{id:guid}")]
        public async Task<TranslatedWordViewModel> GetById(Guid id, CancellationToken ct)
        {
            var result = await _translatedWordService.GetById(id, ct);
            return _mapper.Map<TranslatedWordViewModel>(result);
        }

        [HttpPost]
        public async Task<TranslatedWordViewModel> Add(TranslatedWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _translatedWordService.Add(_mapper.Map<TranslatedWordModel>(viewModel), ct);
            return _mapper.Map<TranslatedWordViewModel>(result);
        }

        [HttpPut]
        public async Task<TranslatedWordViewModel> Put(TranslatedWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _translatedWordService.Update(_mapper.Map<TranslatedWordModel>(viewModel), ct);
            return _mapper.Map<TranslatedWordViewModel>(result);
        }

        [HttpDelete("{id:guid}")]
        public async ValueTask Delete(Guid id, CancellationToken ct)
        {
            await _translatedWordService.Delete(id, ct);
        }

    }
}

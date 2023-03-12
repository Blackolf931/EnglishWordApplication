using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWordApplication.ViewModel.EnglishTranslatedWordViewModel;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApplication.Controllers
{
    [ApiController]
    [Route("/EnglishWordController")]
    public class EnglishWordController : ControllerBase
    {
        private readonly IWordService _service;
        private readonly IMapper _mapper;

        public EnglishWordController(IWordService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("GetAll")]
        public async Task<IEnumerable<EnglishTranslatedWord>> GetAll(CancellationToken ct)
        {
                var result = await _service.GetAll(ct);
                return _mapper.Map<IEnumerable<EnglishTranslatedWord>>(result);
        }

        [HttpGet("{id}")]
        public async Task<EnglishTranslatedWord> GetById(Guid id, CancellationToken ct)
        {
            var result = await _service.GetById(id, ct);
            return _mapper.Map<EnglishTranslatedWord>(result);
        }

        [HttpPost]
        public async Task<EnglishTranslatedWord> Add(EnglishTranslatedWord viewModel, CancellationToken ct)
        {
            var result = await _service.Add(_mapper.Map<EnglishTranslatedWordModel>(viewModel), ct);
            return _mapper.Map<EnglishTranslatedWord>(result);
        }

        [HttpPut]
        public async Task<EnglishTranslatedWord> Put(EnglishTranslatedWord viewModel, CancellationToken ct)
        {
            var result = await _service.Update(_mapper.Map<EnglishTranslatedWordModel>(viewModel), ct); ;
            return _mapper.Map<EnglishTranslatedWord>(result);
        }

        [HttpDelete("{id}")]
        public async ValueTask Delete(Guid id, CancellationToken ct)
        {
            await _service.Delete(id, ct);
        }

    }
}
using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWord.ViewModel.EnglishWordViewModels;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWord.API.Controllers
{
    [ApiController]
    [Route("EnglishTranslatedWordController")]
    public class EnglishTranslatedWordController : ControllerBase
    {
        private readonly IGenericService<EnglishTranslatedWordModel> _service;
        private readonly IMapper _mapper;
        public EnglishTranslatedWordController(IGenericService<EnglishTranslatedWordModel> service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }
        [HttpGet("GetAll")]
        public async Task<IEnumerable<EnglishTranslatedWordModel>> GetAll(CancellationToken ct)
        {
            var result = await _service.GetAll(ct);
            return _mapper.Map<IEnumerable<EnglishTranslatedWordModel>>(result);
        }

        [HttpGet("{id:guid}")]
        public async Task<EnglishTranslatedWordModel> GetById(Guid id, CancellationToken ct)
        {
            var result = await _service.GetById(id, ct);
            return _mapper.Map<EnglishTranslatedWordModel>(result);
        }

        [HttpPost]
        public async Task<EnglishTranslatedWordModel> Add(EnglishWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Add(_mapper.Map<EnglishTranslatedWordModel>(viewModel), ct);
            return _mapper.Map<EnglishTranslatedWordModel>(result);
        }

        [HttpPut]
        public async Task<EnglishTranslatedWordModel> Put(EnglishWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Update(_mapper.Map<EnglishTranslatedWordModel>(viewModel), ct);
            return _mapper.Map<EnglishTranslatedWordModel>(result);
        }

        [HttpDelete("{id:guid}")]
        public async ValueTask Delete(Guid id, CancellationToken ct)
        {
            await _service.Delete(id, ct);
        }
    }
}

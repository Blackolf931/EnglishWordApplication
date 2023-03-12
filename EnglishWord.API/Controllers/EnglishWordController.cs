using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWord.API.ViewModel.EnglishWord;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWord.API.Controllers
{
    [ApiController]
    [Route("EnglishWordController")]
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
        public async Task<IEnumerable<EnglishWordViewModel>> GetAll(CancellationToken ct)
        {
           var result = await _service.GetAll(ct);
           return _mapper.Map<IEnumerable<EnglishWordViewModel>>(result);
        }

        [HttpGet("{id}")]
        public async Task<EnglishWordViewModel> GetById(Guid id, CancellationToken ct)
        {
            var result = await _service.GetById(id, ct);
            return _mapper.Map<EnglishWordViewModel>(result);
        }

        [HttpPost]
        public async Task<EnglishWordViewModel> Add(EnglishWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Add(_mapper.Map<EnglishWordModel>(viewModel), ct);
            return _mapper.Map<EnglishWordViewModel>(result);
        }

        [HttpPut]
        public async Task<EnglishWordViewModel> Put(EnglishWordViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Update(_mapper.Map<EnglishWordModel>(viewModel), ct);
            return _mapper.Map<EnglishWordViewModel>(result);
        }

        [HttpDelete("{id}")]
        public async ValueTask Delete(Guid id, CancellationToken ct)
        {
            await _service.Delete(id, ct);
        }

    }
}
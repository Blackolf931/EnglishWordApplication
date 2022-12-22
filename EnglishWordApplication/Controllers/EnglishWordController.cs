using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWordApplication.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
        public async Task<IEnumerable<WordsViewModel>> GetAll(CancellationToken ct)
        {
        
              // return new List<WordsViewModel>();
                var result = await _service.GetAll(ct);
                return _mapper.Map<IEnumerable<WordsViewModel>>(result);
        }

        [HttpGet("{id}")]
        public async Task<WordsViewModel> GetById(int id, CancellationToken ct)
        {
            var result = await _service.GetById(id, ct);
            return _mapper.Map<WordsViewModel>(result);
        }

        [HttpPost]
        public async Task<CreateViewModel> Add(CreateViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Add(_mapper.Map<EnglishWordModel>(viewModel), ct);
            return _mapper.Map<CreateViewModel>(result);
        }

        [HttpPut]
        public async Task<WordsViewModel> Put(WordsViewModel viewModel, CancellationToken ct)
        {
            var result = await _service.Update(_mapper.Map<EnglishWordModel>(viewModel), ct);
            return _mapper.Map<WordsViewModel>(result);
        }

        [HttpDelete("{id}")]
        public async ValueTask Delete(int id, CancellationToken ct)
        {
            await _service.Delete(id, ct);
        }

    }
}
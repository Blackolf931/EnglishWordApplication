/*using AutoMapper;
using Bll.Interfaces;
using Bll.Models;
using EnglishWordApplication.ViewModel.EnglishWordViewModels;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApplication.Controllers
{
    [ApiController]
    [Route("EnglishTranslatedWordController")]
    public class EnglishTranslatedWord : ControllerBase
    {
        private readonly IGenericService<EnglishWordModel> _service;
        private readonly IMapper _mapper;
        public EnglishTranslatedWord(IGenericService<EnglishWordModel> service, IMapper mapper)
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
    }
}*/

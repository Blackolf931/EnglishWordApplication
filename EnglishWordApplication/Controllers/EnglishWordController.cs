using EnglishWordApplication.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnglishWordController : ControllerBase
    {
        [HttpGet("GetALL")]
        public async Task<IEnumerable<WordsViewModel>> GetAll(CancellationToken ct)
        {
            return new List<WordsViewModel>
            {
                new()
                {
                    EnglishWord = "Test1",
                    TranslateWord = "Test1",
                    TranslatedWords = new List<string> {"test1", "test2", "test3", "Test1"}
                }
            };
        }
    }
}
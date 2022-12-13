using EnglishWordApplication.ViewModel;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnglishWordController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<WordsViewModel>> GetAll(CancellationToken ct)
        {
            return new List<WordsViewModel>
            {
                new()
                {
                    EnglishWord = "Test1",
                    TranslateWord = "Test1",
                    FirstTranslatedWord = "test1",
                    SecondTranslatedWord = "test2",
                    ThirdTranslatedWord = "test3",
                    FourthTranslatedWord = "Test1"
                },new()
                {
                    EnglishWord = "Test2",
                    TranslateWord = "Test2",
                    FirstTranslatedWord = "test4",
                    SecondTranslatedWord = "test5",
                    ThirdTranslatedWord = "test6",
                    FourthTranslatedWord = "Test7"
                }
            };
        }
    }
}
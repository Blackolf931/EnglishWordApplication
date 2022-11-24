namespace EnglishWordApplication.ViewModel
{
    public class WordsViewModel
    {
        public string EnglishWord { get; set; } = null!;
        public string TranslateWord { get; set; } = null!;
        public IEnumerable<string> TranslatedWords { get; set; } = null!;
    }
}

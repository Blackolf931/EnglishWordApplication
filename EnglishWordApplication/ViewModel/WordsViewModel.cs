namespace EnglishWordApplication.ViewModel
{
    public class WordsViewModel
    {
        public int Id { get; set; }
        public string EnglishWord { get; set; }
        public string TranslatedWord { get; set; }
        public IEnumerable<string> TranslatedWords { get; set; }
    }
}

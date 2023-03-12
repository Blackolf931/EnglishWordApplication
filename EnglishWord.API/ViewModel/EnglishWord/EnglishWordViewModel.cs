using EnglishWord.API.ViewModel.EnglishTranslatedWord;

namespace EnglishWord.API.ViewModel.EnglishWord
{
    public class EnglishWordViewModel
    {
        public Guid Id { get; set; }
        public string Word { get; set; } = null!;
        public virtual IEnumerable<EnglishTranslatedWordViewModel> EnglishTranslatedWords { get; set; } = null!;
    }
}

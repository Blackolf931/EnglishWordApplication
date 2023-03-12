using EnglishWord.API.ViewModel.EnglishWord;

namespace EnglishWord.API.ViewModel.EnglishTranslatedWord
{
    public class EnglishTranslatedWordViewModel
    {
        public Guid Id { get; set; }
        public Guid EnglishWordId { get; set; }
        public Guid TranslatedWordId { get; set; }
        public bool IsRightTranslated { get; set; }
        public virtual EnglishWordViewModel EnglishWord { get; set; } = null!;
       // public virtual IEnumerable<EnglishTranslatedWordViewModel> TranslatedWord { get; set; } = null!;
    }
}

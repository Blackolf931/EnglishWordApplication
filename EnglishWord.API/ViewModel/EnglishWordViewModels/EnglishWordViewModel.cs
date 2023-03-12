using EnglishWord.ViewModel.EnglishTranslatedWordViewModel;

namespace EnglishWord.ViewModel.EnglishWordViewModels
{
    public class EnglishWordViewModel
    {
        public Guid Id { get; set; }
        public string EnglishWord { get; set; } = null!;
        public virtual IEnumerable<EnglishTranslatedWordViewModel.EnglishTranslatedWordViewModel> TranslatedWords { get; set; } = null!;
    }
}

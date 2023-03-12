using EnglishWord.ViewModel.EnglishWordViewModels;
using EnglishWord.ViewModel.TranslatedWordViewModel;

namespace EnglishWord.ViewModel.EnglishTranslatedWordViewModel
{
    public class EnglishTranslatedWordViewModel
    {
        public Guid Id { get; set; }
        public Guid EnglishWordId { get; set; }
        public Guid TranslatedWordId { get; set; }
        public bool IsRightTranslated { get; set; }
        public virtual EnglishWordViewModel EnglishWord { get; set; } = null!;
        public virtual IEnumerable<TranslatedWordViewModel.TranslatedWordViewModel> TranslatedWord { get; set; } = null!;
    }
}

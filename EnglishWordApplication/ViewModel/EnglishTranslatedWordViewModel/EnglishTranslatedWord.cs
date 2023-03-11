using EnglishWordApplication.ViewModel.EnglishWordViewModels;
using EnglishWordApplication.ViewModel.TranslatedWordViewModel;

namespace EnglishWordApplication.ViewModel.EnglishTranslatedWordViewModel
{
    public class EnglishTranslatedWord
    {
        public Guid Id { get; set; }
        public Guid EnglishWordId { get; set; }
        public Guid TranslatedWordId { get; set; }
        public bool IsRightTranslated { get; set; }
        public virtual EnglishWordViewModel EnglishWord { get; set; } = null!;
        public virtual IEnumerable<TranslatedWord> TranslatedWord { get; set; } = null!;
    }
}

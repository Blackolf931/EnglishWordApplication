using EnglishWordApplication.ViewModel.EnglishTranslatedWordViewModel;

namespace EnglishWordApplication.ViewModel.EnglishWordViewModels
{
    public class EnglishWordViewModel
    {
        public Guid Id { get; set; }
        public string EnglishWord { get; set; } = null!;
        public virtual IEnumerable<EnglishTranslatedWord> TranslatedWords { get; set; } = null!;
    }
}

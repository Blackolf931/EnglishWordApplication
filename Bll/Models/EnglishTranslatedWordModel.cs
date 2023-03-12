namespace Bll.Models
{
    public class EnglishTranslatedWordModel
    {
        public Guid Id { get; set; }
        public Guid EnglishWordId { get; set; }
        public Guid TranslatedWordId { get; set; }
        public bool IsRightTranslated { get; set; }
        public virtual EnglishWordModel EnglishWord { get; set; } = null!;
        public virtual TranslatedWordModel TranslatedWord { get; set; } = null!;
    }
}

namespace DAL.Entities
{
    public class EnglishTranslatedWordEntity
    {
        public Guid Id { get; set; }
        public Guid EnglishWordId { get; set; }
        public Guid TranslatedWordId { get; set; }
        public bool IsRightTranslated { get; set; }
        public virtual EnglishWordEntity EnglishWord { get; set; } = null!;
        public virtual TranslatedWordEntity TranslatedWord { get; set; } = null!;
    }
}

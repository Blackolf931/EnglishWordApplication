namespace DAL.Entities
{
    public class EnglishWordEntity
    {
        public Guid Id { get; set; }
        public string EnglishWord { get; set; } = null!;
        public virtual EnglishTranslatedWordEntity EnglishTranslatedWords { get; set; }
    }
}

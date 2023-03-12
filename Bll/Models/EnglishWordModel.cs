namespace Bll.Models
{
    public class EnglishWordModel
    {
        public Guid Id { get; set; }
        public string Word { get; set; } = null!;
        public virtual IEnumerable<EnglishTranslatedWordModel> EnglishTranslatedWords { get; set; } = null!;
    }
}

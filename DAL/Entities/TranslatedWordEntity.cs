namespace DAL.Entities
{
    public class TranslatedWordEntity
    {
        public Guid Id { get; set; }
        public string TranslateWord { get; set; } = null!;
    }
}

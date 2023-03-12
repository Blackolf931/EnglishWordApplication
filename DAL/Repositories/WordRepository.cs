using DAL.Context;
using DAL.Entities;
using DAL.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class WordRepository : GenericRepository<EnglishWordEntity>, IWordRepository
    {
        public WordRepository(DatabaseContext context) : base(context)
        {

        }

        public override async Task<IEnumerable<EnglishWordEntity>> GetAll(CancellationToken ct)
        {
            var result = await _dbSet.AsNoTracking().Include(x => x.EnglishTranslatedWords).ThenInclude(x=> x.TranslatedWord).ToListAsync(ct);
            return result;
        }
    }
}

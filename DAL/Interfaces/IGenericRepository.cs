namespace DAL.Interfaces
{
    public interface IGenericRepository<TEntity> where TEntity: class 
    {
        Task<TEntity> Add(TEntity entity, CancellationToken ct);
        Task<TEntity> GetById(int id, CancellationToken ct);
        Task<IEnumerable<TEntity>> GetAll(CancellationToken ct);
        Task<TEntity> Update(TEntity entity, CancellationToken ct);
        Task<TEntity> Delete(TEntity entity, CancellationToken ct);
    }
}

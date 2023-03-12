namespace Bll.Interfaces
{
    public interface IGenericService<TModel>
    {
        Task<TModel> Add(TModel model, CancellationToken ct);
        Task<TModel> Update(TModel model, CancellationToken ct);
        ValueTask Delete(Guid id, CancellationToken ct);
        Task<IEnumerable<TModel>> GetAll(CancellationToken ct);
        Task<TModel> GetById(Guid id, CancellationToken ct);
    }
}

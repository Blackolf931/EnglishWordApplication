using AutoMapper;
using Bll.Interfaces;
using DAL.Interfaces;

namespace Bll.Services
{
    public class GenericService<TModel, TEntity> : IGenericService<TModel>
        where TModel : class
        where TEntity : class
    {

        private readonly IGenericRepository<TEntity> _repository;
        private readonly IMapper _mapper;

        public GenericService(IGenericRepository<TEntity> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<TModel> Add(TModel model, CancellationToken ct)
        {
            var result = await _repository.Add(_mapper.Map<TEntity>(model), ct);
            return _mapper.Map<TModel>(result);
        }

        public async ValueTask Delete(int id, CancellationToken ct)
        {
            var entity = await _repository.GetById(id, ct);
            await _repository.Delete(entity, ct);
        }

        public virtual async Task<IEnumerable<TModel>> GetAll(CancellationToken ct)
        {
            var result = await _repository.GetAll(ct);
            return _mapper.Map<IEnumerable<TModel>>(result);
        }

        public async Task<TModel> GetById(int id, CancellationToken ct)
        {
            var result = await _repository.GetById(id, ct);
            return _mapper.Map<TModel>(result);
        }

        public async Task<TModel> Update(TModel model, CancellationToken ct)
        {
            var result = await _repository.Update(_mapper.Map<TEntity>(model), ct);
            return _mapper.Map<TModel>(result);
        }
    }
}

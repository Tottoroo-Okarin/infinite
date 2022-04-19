using MediatR;
using Microsoft.EntityFrameworkCore;
using TodosService.Entities;
using TodosService.Persistent;

namespace TodosService.Queries
{
    public class GetAllTodosQuery : IRequest<IEnumerable<Todo>>
    {

        public class GetAllTodosQueryHandler : IRequestHandler<GetAllTodosQuery, IEnumerable<Todo>>
        {
            private readonly TodosDbContext _context;

            public GetAllTodosQueryHandler(TodosDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Todo>> Handle(GetAllTodosQuery query, CancellationToken cancellationToken)
            {
                return await _context.Todos.ToListAsync();
            }
        }
    }
}

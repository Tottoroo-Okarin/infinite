using MediatR;
using Microsoft.EntityFrameworkCore;
using TodosService.Entities;
using TodosService.Persistent;

namespace TodosService.Commands
{
    public class AddTodoCommand : IRequest<Todo>
    {
        public string Title { get; set; }

        public string? Description { get; set; }


        public class AddTodoCommandHandler : IRequestHandler<AddTodoCommand, Todo>
        {
            private readonly TodosDbContext _context;

            public AddTodoCommandHandler(TodosDbContext context)
            {
                _context = context;
            }
            public async Task<Todo> Handle(AddTodoCommand request, CancellationToken cancellationToken)
            {
                var todo = _context.Todos.CreateProxy();

                todo.Title = request.Title;
                todo.Description = request.Description;

                await _context.AddAsync(todo);

                await _context.SaveChangesAsync();

                return todo;
            }
        }
    }
}

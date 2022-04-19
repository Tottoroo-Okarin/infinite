using MediatR;
using Microsoft.AspNetCore.Mvc;
using TodosService.Commands;
using TodosService.Entities;
using TodosService.Queries;

namespace TodosService.Controllers
{
    [Route("api/todos")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodosController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<Todo> Create([FromBody] AddTodoCommand command, CancellationToken token)
        {
            return await _mediator.Send(command, token);
        }

        [HttpGet]
        public async Task<IEnumerable<Todo>> GetAll()
        {
            return await _mediator.Send(new GetAllTodosQuery());
        }
    }
}

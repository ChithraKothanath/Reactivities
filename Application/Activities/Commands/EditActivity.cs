

using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Commands;
public class EditActvity{
    public class Command:IRequest<string>{
        public required Activity Activity {get;set;}
    }

    public class Handler(AppDbContext context,IMapper mapper) : IRequestHandler<Command ,string >
    {

        public  async Task<string > Handle(Command request, CancellationToken cancellationToken)
        {
           var activity=await context.Activities
           .FindAsync([request.Activity.Id],cancellationToken)
           ?? throw new Exception("activity not found");
            mapper.Map(request.Activity,activity);
            context.Activities.Update(activity);
            await context.SaveChangesAsync(cancellationToken);
            return request.Activity.Id;

          
        }
    }
}
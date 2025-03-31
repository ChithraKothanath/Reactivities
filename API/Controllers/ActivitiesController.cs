using Application.Activities.Commands;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class  ActivitiesController(): BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities(){
        return await  Mediator.Send(new GetActvityList.Query());
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string  id){
       
        return await Mediator.Send(new GetActvityDetails.Query{Id=id});
    }
    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity( Activity activity){
       
        return await Mediator.Send(new CreateActvity.Command{Activity=activity});
    }
    [HttpPut]
    public async Task<ActionResult> EditActivity( Activity activity){
       
         await Mediator.Send(new EditActvity.Command{Activity=activity});
         return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity( string id){
       
         await Mediator.Send(new DeleteActvity.Command{Id=id});
         return Ok();
    }
}
}

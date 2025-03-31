using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
[ApiController]
[Route("api/[controller]")]
public class BaseAPIController : ControllerBase
{
   private IMediator? _mediatr;

   protected IMediator Mediator=>
   _mediatr??= HttpContext.RequestServices.GetService<IMediator>()
           ?? throw new InvalidOperationException("Imediator service is not available");



}
}

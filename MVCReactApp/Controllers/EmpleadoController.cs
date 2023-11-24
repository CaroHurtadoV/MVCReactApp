using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MVCReactApp.Models;

namespace MVCReactApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleadoController : ControllerBase
    {
        private readonly ReactMvcContext _dbcontext;

        public EmpleadoController(ReactMvcContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("obtenerEmpleados")]

        public IActionResult obtenerEmpleados()
        {
            List <Empleado> Lista = _dbcontext.Empleados.ToList();

            return StatusCode(StatusCodes.Status200OK, Lista);

        }
    }
}

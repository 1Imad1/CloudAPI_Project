using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestApiTrivia.Database;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestApiTrivia.Controllers
{
    [Route("api/v1/trivias")]
    public class Trivia2Controller : Controller
    {
        private readonly ShowDbContext context;

        public Trivia2Controller(ShowDbContext context)
        {
            this.context = context;
        }
    }
}

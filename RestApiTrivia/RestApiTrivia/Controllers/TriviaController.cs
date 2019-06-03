using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Data.Sql;
using RestApiTrivia.Database;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestApiTrivia.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class TriviaController : Controller
    {
        private ShowDbContext showDb;

        public TriviaController(ShowDbContext showDbContext)
        {
            showDb = showDbContext;
        }

        [HttpGet]
        public List<Trivia> GetAllTrivias(string questions, string answer, int? page, string sort, int length = 4, string dir = "asc")
        {
            IQueryable<Trivia> query = showDb.Trivias;
            if (!string.IsNullOrWhiteSpace(questions))
                query = query.Where(q => q.questions == questions);

            if (!string.IsNullOrWhiteSpace(answer))
                query = query.Where(a => a.answer == answer);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "questions":
                        if (dir == "asc")
                            query = query.OrderBy(q => q.questions);
                        else if (dir == "desc")
                            query = query.OrderByDescending(q => q.questions);
                        break;
                }
            }


            if (page.HasValue)
            {
                query = query.Skip(page.Value * length);
            }
            query = query.Take(length);
            return query.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Trivia> GetTriviaById(int id)
        {
            var ShowWithId = showDb.Trivias.Find(id);
            if (ShowWithId == null)
                return NotFound("No Trivia found");
            else
                return Ok(ShowWithId);
        }


        [Route("{id}")]
        [HttpDelete]
        public ActionResult<Trivia> DeleteTriviaById(int id)
        {
            var DeleteWithId = showDb.Trivias.Find(id);
            if (DeleteWithId == null)
                return NotFound("Not found, becaus deleted");
            else
                showDb.Trivias.Remove(DeleteWithId);
            showDb.SaveChanges();
            return Ok("Trivia succesfully deleted!");
        }

        [HttpPost]
        public IActionResult PostTrivia([FromBody] Trivia trivia)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            showDb.Trivias.Add(trivia);
            showDb.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }

        [Route("{id}")]
        [HttpPut]
        public IActionResult Update(int id, [FromBody] Trivia trivia)
        {
            var UpdateTrivia = showDb.Trivias.Find(id);
            if (UpdateTrivia == null)
            {
                return NotFound("Resource is not found");
            }

            UpdateTrivia.HeroID = trivia.HeroID;
            UpdateTrivia.questions = trivia.questions;
            UpdateTrivia.answer = trivia.answer;

            showDb.SaveChanges();
            return Ok(UpdateTrivia);
        }
    }
}
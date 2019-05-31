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
    public class TriviaController : Controller
    {
        private ShowDbContext showDb;

        public TriviaController(ShowDbContext showDbContext)
        {
            showDb = showDbContext;
        }
        
        [HttpGet]
        public List<Trivia> GetAllBooks(string questions, string answer,int? page, string sort, int length = 4, string dir = "asc")
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
        [Authorize]
        public IActionResult PostTrivia([FromBody] Trivia trivia)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            showDb.Trivias.Add(trivia);
            showDb.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }

        //[Route("{id}")]
        [HttpPut]
        public IActionResult Update([FromBody] Trivia trivia)
        {
            var UpdateTrivia = showDb.Trivias.Find(trivia.ID);
            if(UpdateTrivia == null)
            {
                return NotFound("Resource is not found");
            }

            UpdateTrivia.HeroID = trivia.HeroID;
            UpdateTrivia.questions = trivia.questions;
            UpdateTrivia.answer = trivia.answer;

            showDb.SaveChanges();
            return Ok(UpdateTrivia);
        }

        //static List<Trivia> list = new List<Trivia>();

        //static TriviaController()
        //{
        //    list.Add(new Trivia()
        //    {
        //        ID = 1,
        //        HeroID = 15,
        //        questions = "Give me one alias of the three Aliases he has",
        //        answer = "Prototype, Zues, Blacklight"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 2,
        //        HeroID = 254,
        //        questions = "give me 1 group-affiliation of the 3 affiliation it is in",
        //        answer = "Formerly Morlocks, X-Force, Mutant Liberation Front"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 3,
        //        HeroID = 588,
        //        questions = "Where did he born?",
        //        answer = "Mojoworld"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 4,
        //        HeroID = 112,
        //        questions = "What kind of work does this hero do?",
        //        answer = "Vampire hunter"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 5,
        //        HeroID = 220,
        //        questions = "How Much Power does he have?",
        //        answer = "48"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 6,
        //        HeroID = 731,
        //        questions = "he took the identity of Jay Garrick, who was The Flash on Earth 3, How?",
        //        answer = "Whilst trying to steal The Flash's (Barry Allen) speed"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 7,
        //        HeroID = 700,
        //        questions = "Group affiliation?",
        //        answer = "Formerly X-Men"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 8,
        //        HeroID = 1,
        //        questions = "Was he ever an Musician?",
        //        answer = "yes"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 9,
        //        HeroID = 8,
        //        questions = " Is he part of the L.E.G.I.O.N., R.E.B.E.L.S., or both",
        //        answer = "both"
        //    });

        //    list.Add(new Trivia()
        //    {
        //        ID = 10,
        //        HeroID = 18,
        //        questions = "Place of birth?",
        //        answer = "Chest"
        //    });
        //}

        //[HttpGet]
        //public List<Trivia> GetTrivia()
        //{
        //    return list;
        //}

        //[Route("{id}")]
        //[HttpGet]
        //public ActionResult<Trivia> GetTriviaById(int id)
        //{
        //    if (list.Exists(trvia => trvia.ID == id))
        //        return list.First(tr => tr.ID == id);
        //    else
        //        return NotFound();
        //}

        //[Route("{id}")]
        //[HttpDelete]
        //public IActionResult DeleteTrivia(int id)
        //{
        //    if (list.Exists(trvia => trvia.ID == id))
        //    {
        //        var trivia = list.First(tr => tr.ID == id);
        //        list.Remove(trivia);
        //        return NoContent();
        //    }
        //    else
        //        return NotFound();
        //}

        //[HttpPost]
        //public ActionResult<Trivia> AddTrivia([FromBody] Trivia trivia)
        //{
        //    //ken er ID aan toe
        //    var max = list.Max(tr => tr.ID);
        //    trivia.ID = max + 1;
        //    list.Add(trivia);
        //    //return fighter met ID
        //    return Created("", trivia);
        //}
    }
}

//{
//    "id": 5,
//    "heroID": 220,
//    "questions": "How Much Power does he have?",
//    "answer": "48"
//}

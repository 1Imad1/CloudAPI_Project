using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApiTrivia.Database
{
    public class DbInitializer
    {
        public static void Initialize(ShowDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Trivias.Any())
            {
                var trivia = new Trivia()
                {
                    HeroID = 70,
                    questions = "His real name is..",
                    answer = "Bruce Wayne"
                };

                context.Trivias.Add(trivia);
                context.SaveChanges();
            }
        }
    }
}
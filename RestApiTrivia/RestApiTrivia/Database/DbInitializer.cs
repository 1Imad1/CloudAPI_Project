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
        }
    }
}
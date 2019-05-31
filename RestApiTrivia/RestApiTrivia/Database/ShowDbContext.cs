using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApiTrivia.Database
{
    public class ShowDbContext : DbContext
    {
        public ShowDbContext(DbContextOptions<ShowDbContext> options) : base(options)
        {
        }

        public DbSet<Trivia> Trivias { get; set; }
    }
}

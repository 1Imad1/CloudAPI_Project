using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RestApi.Model;

namespace RestApi.Database
{
    public class ShowDatabaseContext : DbContext
    {
        public ShowDatabaseContext(DbContextOptions<ShowDatabaseContext> options) : base(options)
        {
        }

        public DbSet<Trivia> Trivias { get; set; }
    }
}

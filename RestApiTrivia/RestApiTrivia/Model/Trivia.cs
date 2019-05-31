using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestApiTrivia
{
    public class Trivia
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public int HeroID { get; set; }

        [Required]
        public string questions { get; set; }

        [Required]
        public string answer { get; set; }
    }
}

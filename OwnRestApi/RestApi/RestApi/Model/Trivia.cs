using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi.Model
{
    public class Trivia
    {
        public int ID { get; set; }
        public int HeroID {get; set;}
        public string questions { get; set; }
        public string answer { get; set; }
    }
}

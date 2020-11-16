using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ManagesGlobitelEmployees.Models
{
    public class Employee
    {
        public string id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string Gender { get; set; }

        [Display(Name = "Date Of Employment")]
        public string DateOfEmployment { get; set; }
    }
}

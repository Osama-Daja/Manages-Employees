using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagesGlobitelEmployees.Models
{
    public class UserProfile
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string OldPassword { get; set; }

        public float TotalEmployee { get; set; }
        public float CountMaleEmployee { get; set; }
        public float CountFemaleEmployee { get; set; }
        public float RangeGenderMale { get; set; }
        public float RangeGenderFemale { get; set; }
        public float CountRange2030 { get; set; }
        public float CountRange3040 { get; set; }
        public float CountMore40 { get; set; }
        public float Range2030Range { get; set; }
        public float Range3040Range { get; set; }
        public float More40Range { get; set; }
    }
}

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ManagesGlobitelEmployees.Models
{
    public class RolesModel
    {
        public string id { get; set; }

        public string name { get; set; }

        public string normalizedName { get; set; }

        public string concurrencyStamp { get; set; }
    }

    public class RolesShow : IdentityRole { }
}

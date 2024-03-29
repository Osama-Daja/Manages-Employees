﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ManagesGlobitelEmployees.Models
{
    public class ApplicationUserModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string OldPassword { get; set; }
    }
}

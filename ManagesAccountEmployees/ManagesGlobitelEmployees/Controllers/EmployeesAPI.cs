using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ManagesGlobitelEmployees.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;

namespace ManagesGlobitelEmployees.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesAPI : ControllerBase
    {
        private UserManager<ApplicationUser> _UserManeger;
        private SignInManager<ApplicationUser> _SingnManeger;
        private AuthenticationContext _context;

        public EmployeesAPI(AuthenticationContext context, UserManager<ApplicationUser> UserManeger, SignInManager<ApplicationUser> SingnManeger)
        {
            _SingnManeger = SingnManeger;
            _UserManeger = UserManeger;
            _context = context;
        }


        [HttpPost]
        [Route("RegisterUser")]
        [Authorize(Roles = "Admin,Leader")]
        //Post : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser(ApplicationUserModel Model)
        {
            if (Model == null) return new StatusCodeResult(500);
            //var result = await _UserManeger.CreateAsync(role);

            try
            {

                if (Model.Id == "")
                {
                    Model.Role = "Admin";
                    var FindRole = _context.Roles.FirstOrDefault(a => a.Name == Model.Role);

                    if (FindRole == null)
                    {
                        var Role = new IdentityRole()
                        {
                            Name = Model.Role
                        };

                        _context.Roles.Add(Role);
                        var AddRole = await _context.SaveChangesAsync();
                    }

                    var applicationuser = new ApplicationUser()
                    {
                        FullName = Model.FullName,
                        UserName = Model.UserName,
                        Role = Model.Role,
                    };

                    var result = await _UserManeger.CreateAsync(applicationuser, Model.Password);

                    if (result.Succeeded)
                    {
                        var UserRole = _context.Roles.FirstOrDefaultAsync(a => a.Name == applicationuser.Role).Result;

                        IdentityUserRole<string> R = new IdentityUserRole<string>()
                        {
                            UserId = applicationuser.Id,
                            RoleId = UserRole.Id
                        };

                        _context.UserRoles.Add(R);
                        _context.SaveChanges();

                        if (await _UserManeger.IsInRoleAsync(applicationuser, Model.Role))
                        {
                            var resultRol = await _UserManeger.AddToRoleAsync(applicationuser, Model.Role);
                        }
                    }
                    else
                    {
                        var resultUpdate = await _UserManeger.UpdateAsync(applicationuser);
                        return Ok(resultUpdate);
                    }

                    return Ok(result);
                }
                else
                {
                    var User = await _UserManeger.FindByIdAsync(Model.Id);

                    var NewRole = _context.Roles.FirstOrDefault(a => a.Name == (_context.Roles.FirstOrDefault(o => o.Name == Model.Role)).Name);

                    if (_context.UserRoles.FirstOrDefault(o => o.UserId == User.Id) != null)
                    {
                        _context.UserRoles.Remove(_context.UserRoles.FirstOrDefault(o => o.UserId == User.Id));
                    }

                    IdentityUserRole<string> NewR = new IdentityUserRole<string>()
                    {
                        UserId = User.Id,
                        RoleId = NewRole.Id
                    };
                    _context.UserRoles.Add(NewR);
                    _context.SaveChanges();

                    if (await _UserManeger.IsInRoleAsync(User, Model.Role))
                    {
                        var resultNewRol = await _UserManeger.AddToRoleAsync(User, NewRole.Name);
                    }

                    User.UserName = Model.UserName;
                    User.FullName = Model.FullName;
                    User.Role = _context.Roles.FirstOrDefault(a => a.Name == Model.Role).Name;
                    
                    if (Model.Password != "")
                    {
                        var result = await _UserManeger.ChangePasswordAsync(User, Model.OldPassword, Model.Password);
                        await _SingnManeger.RefreshSignInAsync(User);
                    }

                    //                    return (User)
                    var resultUpdate = await _UserManeger.UpdateAsync(User);
                    return Ok(resultUpdate);
                }

            }
            catch (Exception ex)
            {

                //return new StatusCodeResult(500);
                throw ex;
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            var userdata = _context.Users.Find(id);

                _context.Users.Remove(userdata);
                await _context.SaveChangesAsync();

                return Ok(userdata);
        }

        [HttpGet]
        public object Get()
        {
            return "s";
        }

        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginModel model)
        {
            var user = await _UserManeger.FindByNameAsync(model.UserName);

            if (user != null && await _UserManeger.CheckPasswordAsync(user, model.Password))
            {
                var role = await _UserManeger.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim("UserID",user.Id.ToString()),
                    new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234567890123456")), SecurityAlgorithms.HmacSha256Signature)
                };

                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "User Name Or Password is incorrect." });
            }
        }

        [HttpGet]
        [Route("GetUserProfile")]
        [Authorize(Roles = "Admin,Leader")]
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _UserManeger.FindByIdAsync(userId);

            Employee[] MaleEmployee = _context.Employee.Where(a => a.Gender == "Male").ToArray();
            Employee[] FemaleEmployee = _context.Employee.Where(a => a.Gender.Contains("Female")).ToArray();

            Employee[] Range2030 = _context.Employee.Where(a => a.Age >= 20 && a.Age < 30).ToArray();
            Employee[] Range3040 = _context.Employee.Where(a => a.Age >= 30 && a.Age < 40).ToArray();
            Employee[] More40 = _context.Employee.Where(a => a.Age >= 40).ToArray();

            var TotalEmployee = _context.Employee.ToArray().Length;
            var CountMaleEmployee = MaleEmployee.Length;
            var CountFemaleEmployee = FemaleEmployee.Length;
            var RangeGenderMale = (float)MaleEmployee.Length / (float)_context.Employee.ToArray().Length;
            var RangeGenderFemale = (float)FemaleEmployee.Length / (float)_context.Employee.ToArray().Length;

            var CountRange2030 = Range2030.Length;
            var CountRange3040 = Range3040.Length;
            var CountMore40 = More40.Length;

            var Range2030Range = (float)Range2030.Length / (float)_context.Employee.ToArray().Length;
            var Range3040Range = (float)Range3040.Length / (float)_context.Employee.ToArray().Length;
            var More40Range = (float)More40.Length / (float)_context.Employee.ToArray().Length;

            return new UserProfile
            {
                Id = user.Id,
                FullName = user.FullName,
                UserName = user.UserName,
                Role = user.Role,
                TotalEmployee = TotalEmployee,
                CountMaleEmployee = CountMaleEmployee,
                CountFemaleEmployee = CountFemaleEmployee,
                RangeGenderMale = RangeGenderMale,
                RangeGenderFemale = RangeGenderFemale,
                CountRange2030 = CountRange2030,
                CountRange3040 = CountRange3040,
                CountMore40 = CountMore40,
                Range2030Range = Range2030Range,
                Range3040Range = Range3040Range,
                More40Range = More40Range
            };
        }

        [HttpGet]
        [Route("GetUserAll")]
        [Authorize(Roles = "Admin,Leader")]
        public IEnumerable<ApplicationUser> GetUserAll()
        {
            var Value = _UserManeger.Users.Where(a=>a.Role != "Leader");
            return Value;
        }
    }
}
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using ManagesGlobitelEmployees.Models;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using OfficeOpenXml;

namespace ManagesGlobitelEmployees.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private UserManager<ApplicationUser> _UserManeger;
        private SignInManager<ApplicationUser> _SingnManeger;
        private AuthenticationContext _context;

        public AccountController(AuthenticationContext context, UserManager<ApplicationUser> UserManeger, SignInManager<ApplicationUser> SingnManeger)
        {
            _SingnManeger = SingnManeger;
            _UserManeger = UserManeger;
            _context = context;
        }

        public ActionResult ExportAdminList ()
        {
            var DataEmployee = _UserManeger.Users.ToList(); 
            var stream = new MemoryStream();

            using(var package = new ExcelPackage(stream))
            {
                var Sheet = package.Workbook.Worksheets.Add("ManagesGlobitelEmployeesAdminList");

                Sheet.Cells.LoadFromCollection(DataEmployee, true);

                package.Save();
            }

            stream.Position = 0;
            var FileName = $"ManagesGlobitelEmployeesAdminList{DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", FileName);
        }
/*
        public ActionResult ExportRolesList()
        {
            var DataEmployee = _context.Roles.ToList();
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var Sheet = package.Workbook.Worksheets.Add("ManagesGlobitelEmployeesRolesList");

                Sheet.Cells.LoadFromCollection(DataEmployee, true);

                package.Save();
            }

            stream.Position = 0;
            var FileName = $"ManagesGlobitelEmployeesRolesList{DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", FileName);
        }
        */
        public ActionResult ExportTargetNumber()
        {
            Employee[] MaleEmployee = _context.Employee.Where(a => a.Gender == "Male").ToArray();
            Employee[] FemaleEmployee = _context.Employee.Where(a => a.Gender.Contains("Female")).ToArray();

            Employee[] Range2030 = _context.Employee.Where(a => a.Age >= 20 && a.Age < 30).ToArray();
            Employee[] Range3040 = _context.Employee.Where(a => a.Age >= 30 && a.Age < 40).ToArray();
            Employee[] More40 = _context.Employee.Where(a => a.Age >= 40).ToArray();

            var CountMaleEmployee = MaleEmployee.Length;
            var CountFemaleEmployee = FemaleEmployee.Length;
            var RangeGenderMale = (double)MaleEmployee.Length / (double)_context.Employee.ToArray().Length;
            var RangeGenderFemale = (double)FemaleEmployee.Length / (double)_context.Employee.ToArray().Length;

            var CountRange2030 = Range2030.Length;
            var CountRange3040 = Range3040.Length;
            var CountMore40 = More40.Length;

            var Range2030Range = (double)Range2030.Length / (double)_context.Employee.ToArray().Length;
            var Range3040Range = (double)Range3040.Length / (double)_context.Employee.ToArray().Length;
            var More40Range = (double)More40.Length / (double)_context.Employee.ToArray().Length;

            List<string> TargetNumber = new List<string>() 
            {
                { "Count Male Employee : " + CountMaleEmployee.ToString() },
                { "Count Female Employee : " + CountFemaleEmployee.ToString() },
                { "Range Gender Male : " + RangeGenderMale.ToString() },
                { "Range Gender Female : " + RangeGenderFemale.ToString() },
                { "Count Range 20 To 30 : " + CountRange2030.ToString() },
                { "Count Range 30 T0 40 : " + CountRange3040.ToString() },
                { "Count More 40 : " + CountMore40.ToString() },
                { "Range 20 To 30 Range : " + Range2030Range.ToString() },
                { "Range 30 To 40 Range : " + Range3040Range.ToString() },
                { "Range More 40 : " + More40Range.ToString() },
            };

            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var Sheet = package.Workbook.Worksheets.Add("ManagesGlobitelEmployeesTargetNumber");

                Sheet.Cells.LoadFromCollection(TargetNumber, true);

                package.Save();
            }

            stream.Position = 0;
            var FileName = $"ManagesGlobitelEmployeesTargetNumber{DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", FileName);
        }

        public IActionResult Home()
        {
            Employee[] MaleEmployee = _context.Employee.Where(a => a.Gender == "Male").ToArray();
            Employee[] FemaleEmployee = _context.Employee.Where(a => a.Gender.Contains("Female")).ToArray();

            Employee[] Range2030 = _context.Employee.Where(a => a.Age >= 20 && a.Age < 30 ).ToArray();
            Employee[] Range3040 = _context.Employee.Where(a => a.Age >= 30 && a.Age < 40).ToArray();
            Employee[] More40 = _context.Employee.Where(a => a.Age >= 40).ToArray();

            ViewBag.MaleEmployee = MaleEmployee.Length;
            ViewBag.FemaleEmployee = FemaleEmployee.Length;
            ViewBag.RangeGenderMale = (double)MaleEmployee.Length / (double)_context.Employee.ToArray().Length;
            ViewBag.RangeGenderFemale = (double)FemaleEmployee.Length / (double)_context.Employee.ToArray().Length;

            ViewBag.Range2030 = Range2030.Length;
            ViewBag.Range3040 = Range3040.Length;
            ViewBag.More40 = More40.Length;

            ViewBag.Range2030Range = (double)Range2030.Length / (double)_context.Employee.ToArray().Length;
            ViewBag.Range3040Range = (double)Range3040.Length / (double)_context.Employee.ToArray().Length;
            ViewBag.More40Range = (double)More40.Length / (double)_context.Employee.ToArray().Length;

            return View();
        }

        public IActionResult Index()
        {
            return View(_context.ApplicationUser);
        }
/*
        public IActionResult RoleList()
        {
            return View(_context.Roles.ToList());
        }

        [HttpGet]
        public ActionResult CreateRole()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> CreateRole(RolesModel model)
        {

                    var Role = new IdentityRole()
                    {
                        Name = model.name
                    };

                    _context.Roles.Add(Role);
                    var result = await _context.SaveChangesAsync();

                    return RedirectToAction("RoleList");
        }

        public ActionResult EditRole(string Id)
        {
            var Role = _context.Roles.FirstOrDefault(a => a.Id == Id);

            RolesModel model = new RolesModel
            {
                id = Role.Id,
                name = Role.Name
            };

            return View(model);
        }

        [HttpPost]
        public async Task<ActionResult> EditRole(RolesModel model)
        {
            var Role = _context.Roles.FirstOrDefault(a => a.Id == model.id);
            Role.Name = model.name;

            var result = await _context.SaveChangesAsync();

            return RedirectToAction("RoleList");
        }

        public async Task<ActionResult> DeleteRole([FromRoute] string id)
        {
            var roledata = _context.Roles.Find(id);

                _context.Roles.Remove(roledata);
                await _context.SaveChangesAsync();

                return RedirectToAction("RoleList");
        }

        public async Task<ActionResult> DetailsRole(string id)
        {
            var Role = _context.Roles.FirstOrDefault(a => a.Id == id);

            var UserData = new RolesModel
            {
                id = Role.Id,
                name = Role.Name
            };

            return View(UserData);
        }
        */

        public ActionResult Create()
        {
            ViewBag.Role = new SelectList(_context.Roles.ToList());

            return View();
        }

        [HttpPost]
        public async Task<ActionResult> Create(ApplicationUserModel model)
        {
            if (model != null)
            {
                var AuthorUser = _context.Users.FirstOrDefault(a => a.UserName == model.UserName);
                if (AuthorUser == null)
                {
                    ViewBag.Role = new SelectList(_context.Roles, model.Role);

                    var applicationuser = new ApplicationUser()
                    {
                        FullName = model.FullName,
                        UserName = model.UserName,
                        Role = model.Role
                    };

                    var result = await _UserManeger.CreateAsync(applicationuser, model.Password);
                    //var Login =  _SingnManeger.SignInAsync(applicationuser , isPersistent : false,"Employee");

                    var UserRole = _context.Roles.FirstOrDefaultAsync(a => a.Name == applicationuser.Role).Result;

                    IdentityUserRole<string> R = new IdentityUserRole<string>()
                    {
                        UserId = applicationuser.Id,
                        RoleId = UserRole.Id
                    };
                    _context.UserRoles.Add(R);
                    _context.SaveChanges();

                    if (await _UserManeger.IsInRoleAsync(applicationuser, model.Role))
                    {
                        var resultRol = await _UserManeger.AddToRoleAsync(applicationuser, model.Role);
                    }

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index");
                    }
                }
            }
            else
            {
                return View();
            }
            return RedirectToAction("Index");
        }

        public ActionResult Edit(string Id)
        {
            var User = _UserManeger.Users.FirstOrDefault(a => a.Id == Id);
            ViewBag.Role = new SelectList(_context.Roles.ToList());

            var UserData = new ApplicationUserModel
            {
                Id = User.Id,
                FullName = User.FullName,
                UserName = User.UserName,
                Role = User.Role
            };

            return View(UserData);
        }

        [HttpPost]
        public async Task<ActionResult> Edit(ApplicationUserModel model)
        {
            var User = _UserManeger.Users.FirstOrDefault(a => a.Id == model.Id);
            ViewBag.Role = new SelectList(_context.Roles, model.Role);

            User.UserName = model.UserName;
            User.FullName = model.FullName;
            User.Role = model.Role;

            if (model.Password != string.Empty && model.OldPassword != string.Empty && model.Password != null && model.OldPassword != null)
            {
                var result = await _UserManeger.ChangePasswordAsync(User, model.OldPassword, model.Password);
            }

            var resultUpdate = await _UserManeger.UpdateAsync(User);
            return RedirectToAction("Index");
        }

        public async Task<ActionResult> Delete([FromRoute] string id)
        {
            var userdata = _context.Users.Find(id);
            if (userdata != null)
            {
                _context.Users.Remove(userdata);
                await _context.SaveChangesAsync();

                return RedirectToAction("Index");
            }
            return View();
        }

        public async Task<ActionResult> Details(string id)
        {
            var User = _UserManeger.Users.FirstOrDefault(a => a.Id == id);

            var UserData = new ApplicationUserModel
            {
                Id = User.Id,
                FullName = User.FullName,
                UserName = User.UserName,
                Role = User.Role
            };

            return View(UserData);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _SingnManeger.SignOutAsync();
            return RedirectToAction("index", "home");
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login(string returnUrl = "")
        {
            var model = new LoginModel { ReturnUrl = returnUrl };
            return View(model);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _SingnManeger.PasswordSignInAsync(model.UserName,
                   model.Password, model.RememberMe, false);

                var applicationuser = _UserManeger.Users.FirstOrDefault(a => a.UserName == model.UserName);

                if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Redirect(model.ReturnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Home");
                    }
                }
            }
            ModelState.AddModelError("", "Invalid login attempt");
            return View(model);
        }

        public ActionResult Search()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Search(string UserName)
        {
            var user = _UserManeger.Users.Where(a=> a.UserName.Contains(UserName));

            return View(user.ToList());
        }
    }
}
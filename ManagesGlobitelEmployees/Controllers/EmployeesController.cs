using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ManagesGlobitelEmployees.Models;
using System.IO;
using OfficeOpenXml;
using Microsoft.AspNetCore.Authorization;

namespace ManagesGlobitelEmployees.Controllers
{
    [Authorize]
    public class EmployeesController : Controller
    {
        private readonly AuthenticationContext _context;

        public EmployeesController(AuthenticationContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(_context.Employee);
        }

        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }
            
            var employee = await _context.Employee
                .FirstOrDefaultAsync(m => m.id == id);
            if (employee == null)
            {
                return NotFound();
            }

            return View(employee);
        }

        public IActionResult Create()
        {
            ViewBag.Gender = new SelectList(new List<string> { "Male", "Female" }).ToList();

            return View();
        }

        // POST: Employees/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Create([Bind("id,Name,Age,Gender")] Employee employee)
        {
            if (ModelState.IsValid)
            {
                ViewBag.Gender = new SelectList(new List<string> { "Male", "Female" });

                employee.DateOfEmployment = DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss");
                _context.Add(employee);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }

        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return View(employee);
        }

        // POST: Employees/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<IActionResult> Edit(string id, [Bind("id,Name,Age,Gender")] Employee employee)
        {
            if (id != employee.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    
                    _context.Update(employee);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EmployeeExists(employee.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(employee);
        }


        public async Task<IActionResult> Delete(string id)
        {
            var employee = await _context.Employee.FindAsync(id);

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return RedirectToAction("Index");
        }

        private bool EmployeeExists(string id)
        {
            return _context.Employee.Any(e => e.id == id);
        }

        public ActionResult Search()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Search(string Name, int Age, string Gender)
        {
            var Employee = _context.Employee.Where(a => a.Name.Contains(Name) || a.Age == Age || a.Gender == Gender);

            return View(Employee.ToList());
        }

        public ActionResult ExportEmployeeList()
        {
            var DataEmployee = _context.Employee.ToList();
            var stream = new MemoryStream();

            using (var package = new ExcelPackage(stream))
            {
                var Sheet = package.Workbook.Worksheets.Add("ManagesGlobitelEmployeesEmployeeList");

                Sheet.Cells.LoadFromCollection(DataEmployee, true);

                package.Save();
            }

            stream.Position = 0;
            var FileName = $"ManagesGlobitelEmployeesEmployeeList{DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss")}.xlsx";
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", FileName);
        }
    }
}

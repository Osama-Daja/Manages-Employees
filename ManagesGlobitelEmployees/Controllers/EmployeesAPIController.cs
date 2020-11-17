using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ManagesGlobitelEmployees.Models;
using Microsoft.AspNetCore.Authorization;
using System.IO;
using OfficeOpenXml;

namespace ManagesGlobitelEmployees.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesAPIController : ControllerBase
    {
        private readonly AuthenticationContext _context;

        public EmployeesAPIController(AuthenticationContext context)
        {
            _context = context;
        }

        // GET: api/EmployeesAPI
        [HttpGet]
        [Authorize(Roles = "Admin,Leader")]
        public IEnumerable<Employee> GetEmployee()
        {
            return _context.Employee;
        }

        // POST: api/EmployeesAPI
        [HttpPost]
        [Authorize(Roles = "Admin,Leader")]
        public async Task<IActionResult> PostEmployee([FromBody] Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (employee.id == "")
            {
                employee.id = null;
                employee.DateOfEmployment = DateTime.Now.ToString("yyyy/MM/dd//HH:mm:ss");
                _context.Employee.Add(employee);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetEmployee", new { id = employee.id }, employee);
            }else
            {

                _context.Entry(employee).State = EntityState.Modified;

                try
                {
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

                return NoContent();
            }
        }

        // DELETE: api/EmployeesAPI/5
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin,Leader")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return Ok(employee);
        }

        private bool EmployeeExists(string id)
        {
            return _context.Employee.Any(e => e.id == id);
        }

        [HttpPost]
        [Route("SearchEmployee")]
        [Authorize(Roles = "Admin,Leader")]
        //Post : /api/ApplicationUser/Register
        public async Task<Object> SearchEmployee(EmployeeModel Model)
        {
            if (Model.Gender == "")
            { return _context.Employee.Where(a => a.Name.Contains(Model.Name)); }

            var Value = _context.Employee.Where(a => a.Name.Contains(Model.Name) && a.Gender.Length == Model.Gender.Length);
            return Value;
        }
    }
}
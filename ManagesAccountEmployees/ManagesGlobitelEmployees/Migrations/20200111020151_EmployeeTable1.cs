using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagesGlobitelEmployees.Migrations
{
    public partial class EmployeeTable1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Age",
                table: "Employee",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Age",
                table: "Employee",
                nullable: true,
                oldClrType: typeof(int));
        }
    }
}

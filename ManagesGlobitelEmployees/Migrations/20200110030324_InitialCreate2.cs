using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagesGlobitelEmployees.Migrations
{
    public partial class InitialCreate2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "ApplicationUserModels",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "ApplicationUserModels",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "ApplicationUserModels",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "ApplicationUserModels");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "ApplicationUserModels");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "ApplicationUserModels");
        }
    }
}

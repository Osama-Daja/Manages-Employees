using ManagesGlobitelEmployees.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IO;
using System.Text;

namespace ManagesGlobitelEmployees
{
    public class Startup
    {
        public IConfiguration Configuration;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddDbContext<AuthenticationContext>(options =>
                options.UseSqlServer("Server=(localDB)\\MSSQLLocalDB;Database=ManagesGlobitelEmployeesDB;Trusted_Connection=true;MultipleActiveResultSets=True;"));
            //Server=(localDB)\\MSSQLLocalDB;Database=ManagesGlobitelEmployeesDB;Trusted_Connection=true;MultipleActiveResultSets=True;

            services.AddDefaultIdentity<ApplicationUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<AuthenticationContext>();

            services.Configure<IdentityOptions>(options =>
                        {
                            options.Password.RequireDigit = false;
                            options.Password.RequireNonAlphanumeric = false;
                            options.Password.RequireLowercase = false;
                            options.Password.RequireUppercase = false;
                            options.Password.RequiredLength = 1;
                        }
                     );

/* */
                        services.AddCors();

                        var key = Encoding.UTF8.GetBytes("1234567890123456");

                        services.AddAuthentication(x =>
                        {
                            x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                            x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                            x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

                        }).AddJwtBearer(x => {
                            x.RequireHttpsMetadata = false;
                            x.SaveToken = false;
                            x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                            {
                                ValidateIssuerSigningKey = true,
                                IssuerSigningKey = new SymmetricSecurityKey(key),
                                ValidateIssuer = false,
                                ValidateAudience = false,
                                ClockSkew = TimeSpan.Zero
                            };


                        });

            services.AddCors(o => o.AddPolicy("charppolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors("charppolicy");

            app.UseCors(builder =>
            builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod()
            );


            app.UseHttpsRedirection();
            

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();
/**/
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "npmManageEmployees";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}

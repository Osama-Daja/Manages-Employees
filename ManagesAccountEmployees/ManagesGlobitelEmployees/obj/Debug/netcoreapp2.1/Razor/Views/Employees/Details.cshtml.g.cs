#pragma checksum "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "af22b7adbd6e03c329db618ec3c6ee08d8bab29f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Employees_Details), @"mvc.1.0.view", @"/Views/Employees/Details.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Employees/Details.cshtml", typeof(AspNetCore.Views_Employees_Details))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"af22b7adbd6e03c329db618ec3c6ee08d8bab29f", @"/Views/Employees/Details.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b853c2693020103458b52d8246f923ca3fd89014", @"/Views/_ViewImports.cshtml")]
    public class Views_Employees_Details : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<ManagesGlobitelEmployees.Models.Employee>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Img/profile.png"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("far fa-edit fa-lg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Edit", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Index", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(49, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
  
    ViewData["Title"] = "Details  Employee";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(151, 21, true);
            WriteLiteral("\r\n    <h2>Details Of ");
            EndContext();
            BeginContext(173, 36, false);
#line 8 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
              Write(Html.DisplayFor(model => model.Name));

#line default
#line hidden
            EndContext();
            BeginContext(209, 151, true);
            WriteLiteral("</h2>\r\n\r\n\r\n    <div class=\"container border\">\r\n        <div class=\"row text-center\">\r\n            <div class=\"col-6 text-center\">\r\n                    ");
            EndContext();
            BeginContext(360, 31, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "63080dedbd5d420bb2f414dc43713de3", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(391, 324, true);
            WriteLiteral(@"
            </div>

            <div class=""col-6 text-center container"">
                <table class=""table"">
                    <tbody>
                        <tr>
                            <td class=""text-success"">
                                <i class=""fa fa-user""></i>
                                ");
            EndContext();
            BeginContext(716, 40, false);
#line 23 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayNameFor(model => model.Name));

#line default
#line hidden
            EndContext();
            BeginContext(756, 105, true);
            WriteLiteral(" :\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(862, 36, false);
#line 26 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayFor(model => model.Name));

#line default
#line hidden
            EndContext();
            BeginContext(898, 257, true);
            WriteLiteral(@"
                            </td>
                        </tr>

                        <tr>
                            <td class=""text-decoration-none"">
                                <i class=""fas fa-pager""></i>
                                ");
            EndContext();
            BeginContext(1156, 39, false);
#line 33 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayNameFor(model => model.Age));

#line default
#line hidden
            EndContext();
            BeginContext(1195, 105, true);
            WriteLiteral(" :\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(1301, 35, false);
#line 36 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayFor(model => model.Age));

#line default
#line hidden
            EndContext();
            BeginContext(1336, 251, true);
            WriteLiteral("\r\n                            </td>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <td class=\"text-dark\">\r\n                                <i class=\"fas fa-venus-mars\"></i>\r\n                                ");
            EndContext();
            BeginContext(1588, 42, false);
#line 43 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayNameFor(model => model.Gender));

#line default
#line hidden
            EndContext();
            BeginContext(1630, 105, true);
            WriteLiteral(" :\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(1736, 38, false);
#line 46 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayFor(model => model.Gender));

#line default
#line hidden
            EndContext();
            BeginContext(1774, 253, true);
            WriteLiteral("\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-dark\">\r\n                                <i class=\"far fa-calendar-check\"></i>\r\n                                ");
            EndContext();
            BeginContext(2028, 52, false);
#line 52 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayNameFor(model => model.DateOfEmployment));

#line default
#line hidden
            EndContext();
            BeginContext(2080, 105, true);
            WriteLiteral(" :\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2186, 48, false);
#line 55 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                           Write(Html.DisplayFor(model => model.DateOfEmployment));

#line default
#line hidden
            EndContext();
            BeginContext(2234, 184, true);
            WriteLiteral("\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-center\">\r\n                                ");
            EndContext();
            BeginContext(2418, 76, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "52c6e0b001884e40ab2e7da7629e491f", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_2.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_2);
            if (__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues == null)
            {
                throw new InvalidOperationException(InvalidTagHelperIndexerAssignment("asp-route-id", "Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper", "RouteValues"));
            }
            BeginWriteTagHelperAttribute();
#line 60 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Employees\Details.cshtml"
                                                                                 WriteLiteral(Model.id);

#line default
#line hidden
            __tagHelperStringValueBuffer = EndWriteTagHelperAttribute();
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"] = __tagHelperStringValueBuffer;
            __tagHelperExecutionContext.AddTagHelperAttribute("asp-route-id", __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.RouteValues["id"], global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2494, 103, true);
            WriteLiteral("\r\n                            </td>\r\n                            <td>\r\n                                ");
            EndContext();
            BeginContext(2597, 38, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a394920eed0483ab6eebe0db0efb19b", async() => {
                BeginContext(2619, 12, true);
                WriteLiteral("Back to List");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_3.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_3);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2635, 177, true);
            WriteLiteral("\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                 </div>\r\n        </div>\r\n    </div>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ManagesGlobitelEmployees.Models.Employee> Html { get; private set; }
    }
}
#pragma warning restore 1591

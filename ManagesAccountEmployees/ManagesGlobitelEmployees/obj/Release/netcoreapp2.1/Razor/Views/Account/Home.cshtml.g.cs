#pragma checksum "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "0c230af6dd31513012aa7f16e2171dc2bd551f22"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Account_Home), @"mvc.1.0.view", @"/Views/Account/Home.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Account/Home.cshtml", typeof(AspNetCore.Views_Account_Home))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"0c230af6dd31513012aa7f16e2171dc2bd551f22", @"/Views/Account/Home.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b853c2693020103458b52d8246f923ca3fd89014", @"/Views/_ViewImports.cshtml")]
    public class Views_Account_Home : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("btn btn-outline-success"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "ExportTargetNumber", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
  
    ViewData["Title"] = "Home "+User.Identity.Name;
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(109, 91, true);
            WriteLiteral("\r\n    <h2 class=\"text-center\">Target Number</h2>\r\n\r\n\r\n    <div class=\"container\">\r\n        ");
            EndContext();
            BeginContext(200, 77, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "eef09801405c4e0684aea1ddc21d0fea", async() => {
                BeginContext(267, 6, true);
                WriteLiteral("Export");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(277, 235, true);
            WriteLiteral("\r\n        <div class=\"row text-center\">\r\n            <div class=\"col border\">\r\n                <div class=\"counter\">\r\n                    <i class=\"fa fa-male fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(513, 20, false);
#line 16 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.MaleEmployee);

#line default
#line hidden
            EndContext();
            BeginContext(533, 186, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">Male Employee</p>\r\n                    <i class=\"fa fa-code fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(720, 23, false);
#line 19 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.RangeGenderMale);

#line default
#line hidden
            EndContext();
            BeginContext(743, 317, true);
            WriteLiteral(@"</h2>
                    <p class=""count-text "">Range Female Employee</p>
                </div>
            </div>
            <div class=""col border"">
                <div class=""counter"">
                    <i class=""fa fa-female fa-2x""></i>
                    <h2 class=""timer count-title count-number"">");
            EndContext();
            BeginContext(1061, 22, false);
#line 26 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.FemaleEmployee);

#line default
#line hidden
            EndContext();
            BeginContext(1083, 188, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">Female Employee</p>\r\n                    <i class=\"fa fa-code fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(1272, 25, false);
#line 29 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.RangeGenderFemale);

#line default
#line hidden
            EndContext();
            BeginContext(1297, 372, true);
            WriteLiteral(@"</h2>
                    <p class=""count-text "">Range Female Employee</p>
                </div>
            </div>
        </div>

        <div class=""row text-center"">
            <div class=""col border"">
                <div class=""counter"">
                    <i class=""fa fa-code fa-2x""></i>
                    <h2 class=""timer count-title count-number"">");
            EndContext();
            BeginContext(1670, 17, false);
#line 39 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.Range2030);

#line default
#line hidden
            EndContext();
            BeginContext(1687, 194, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">Age between 20 And 30</p>\r\n                    <i class=\"fa fa-code fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(1882, 22, false);
#line 42 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.Range2030Range);

#line default
#line hidden
            EndContext();
            BeginContext(1904, 321, true);
            WriteLiteral(@"</h2>
                    <p class=""count-text "">Range Age between 20 And 30</p>
                </div>
            </div>
            <div class=""col border"">
                <div class=""counter"">
                    <i class=""fa fa-code fa-2x""></i>
                    <h2 class=""timer count-title count-number"">");
            EndContext();
            BeginContext(2226, 17, false);
#line 49 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.Range3040);

#line default
#line hidden
            EndContext();
            BeginContext(2243, 194, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">Age between 30 And 40</p>\r\n                    <i class=\"fa fa-code fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(2438, 22, false);
#line 52 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.Range3040Range);

#line default
#line hidden
            EndContext();
            BeginContext(2460, 321, true);
            WriteLiteral(@"</h2>
                    <p class=""count-text "">Range Age between 30 And 40</p>
                </div>
            </div>
            <div class=""col border"">
                <div class=""counter"">
                    <i class=""fa fa-code fa-2x""></i>
                    <h2 class=""timer count-title count-number"">");
            EndContext();
            BeginContext(2782, 14, false);
#line 59 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.More40);

#line default
#line hidden
            EndContext();
            BeginContext(2796, 180, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">More 40</p>\r\n                    <i class=\"fa fa-code fa-2x\"></i>\r\n                    <h2 class=\"timer count-title count-number\">");
            EndContext();
            BeginContext(2977, 19, false);
#line 62 "E:\ASP.net\ASP.net Core\ManagesAccountEmployees\ManagesGlobitelEmployees\Views\Account\Home.cshtml"
                                                          Write(ViewBag.More40Range);

#line default
#line hidden
            EndContext();
            BeginContext(2996, 139, true);
            WriteLiteral("</h2>\r\n                    <p class=\"count-text \">Range More 40</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591

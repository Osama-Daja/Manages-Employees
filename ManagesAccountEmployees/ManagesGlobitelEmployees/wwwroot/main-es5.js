function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"wrapper \">\n\n<router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forbidden/forbidden.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forbidden/forbidden.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForbiddenForbiddenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col s6 offset-s3\">\n        <div class=\"card\">\n\n            <div class=\"card-content\">\n                <h1>You don't have the premission to access this resource.</h1>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/homepage/homepage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/homepage/homepage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublichomeHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"container d-flex align-items-center\">\n\n        <div class=\"mx-auto text-center\">\n            <h1 class=\"mx-auto my-0 text-uppercase\">Hallo Visitor</h1>\n            <h2 class=\"text-dark mx-auto mt-2 mb-5\">My name is Osama Al-Dajah and this is my website to Manage Employee</h2>\n            <h4>I am Work the web sit using Asp.net core API with angular</h4>\n            <a routerLink = \"/publichome/login\" class=\"btn btn-primary js-scroll-trigger\">Get Started</a>\n        </div>\n\n    </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublichomeLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h3 class=\"card-title\">Log In</h3>\n            </div>\n            <div class=\"card-body\">\n              <form #form=\"ngForm\" class=\"md-4\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n                <label>You Can Log In Useing User Name : Admin And Password : Admin</label>\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">User Name</label>\n                      <input class=\"form-control\" #UserName = \"ngModel\" name=\"UserName\" [(ngModel)] = \"formModel.UserName\" required>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Password</label>\n                        <input class=\"form-control\" type=\"password\" #Password = \"ngModel\" name=\"Password\" [(ngModel)] = \"formModel.Password\" required>\n                    </div>\n                    </div>\n                  </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled] = \"form.invalid\">Log In</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/publichome.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/publichome.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPublichomePublichomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    \n        <div class=\"sidebar\" data-color=\"purple\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-2.jpg\">\n          <div class=\"sidebar-wrapper\">\n            <ul class=\"nav\">\n            </ul>\n          </div>\n        </div>\n\n    <div class=\"wrapper \">\n      <div class=\"main-panel\">\n        <nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \" id=\"navigation-example\">\n          <div class=\"container-fluid\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" data-target=\"#navigation-example\">\n              <span class=\"sr-only\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n              <span class=\"navbar-toggler-icon icon-bar\"></span>\n            </button>\n\n            <div class=\"collapse navbar-collapse justify-content-end\">\n\n              <ul class=\"navbar-nav\">\n\n                <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink = \"/publichome/login\" >Log In</a>\n                </li>\n\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink = \"/publichome/homepage\" >Home Page</a>\n              </li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n\n        <div class=\"content\">\n          <div class=\"container\">\n\n        <router-outlet></router-outlet>\n\n        </div>\n        </div>\n        </div>\n        </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/adminlist/adminlist.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/adminlist/adminlist.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAdminlistAdminlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h3 class=\"card-title\">Add Another Account</h3>\n            </div>\n            <div class=\"card-body\">\n              <form #form=\"ngForm\" class=\"md-4\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input style=\"color: black;\" readonly type=\"text\" name=\"id\" #id=\"ngModel\" [(ngModel)] = \"service.id\"\n                      class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">userName</label>\n                        <input style=\"color: black;\" required value=\"\" type=\"text\" name=\"userName\" #userName=\"ngModel\" [(ngModel)] = \"service.userName\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">fullName</label>\n                        <input style=\"color: black;\" required value=\"\" type=\"text\" name=\"fullName\" #fullName=\"ngModel\" [(ngModel)] = \"service.fullName\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Password</label>\n                        <input style=\"color: black;\" type=\"password\" name=\"Password\" #Password=\"ngModel\" [(ngModel)] = \"service.Password\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"\">If You Need Change Password Input Old Password To That Account</label>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Old Password</label>\n                        <input style=\"color: black;\" type=\"password\" name=\"Oldpassword\" #Oldpassword=\"ngModel\" [(ngModel)] = \"service.Oldpassword\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled] = \"form.invalid\">Register</button>\n              </form>\n              <button (click) = \"Clear()\" class=\"btn btn-primary\">Clear</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"col-md-12\">\n    <div class=\"card card-plain\">\n      <div class=\"card-header card-header-primary\">\n        <h4 class=\"card-title mt-0\">Employee List</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\" style=\"color: white;\">\n            <thead>\n                <td >id</td>\n                <td >userName</td>\n                <td >fullName</td>\n                <td >Role</td>\n        </thead>\n        <tr *ngFor =\"let pd of service.list\">\n            <td (click) =\"populateForm(pd)\">{{pd.id}}</td>\n            <td (click) =\"populateForm(pd)\">{{pd.userName}}</td>\n            <td (click) =\"populateForm(pd)\">{{pd.fullName}}</td>\n            <td (click) =\"populateForm(pd)\">{{pd.role}}</td>\n            <td>\n                <i class=\"far fa-trash-alt fa-lg text-danger\" (click) = \"onDelete(pd)\"></i>\n            </td>\n        </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/employeelist/employeelist.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/employeelist/employeelist.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserEmployeelistEmployeelistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n              <h3 class=\"card-title\">Add Employee</h3>\n            </div>\n            <div class=\"card-body\">\n              <form #form=\"ngForm\" class=\"md-4\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <input style=\"color: black;\" readonly type=\"text\" name=\"id\" #id=\"ngModel\" [(ngModel)] = \"service.id\"\n                      class=\"form-control\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">name</label>\n                        <input style=\"color: black;\" required value=\"\" type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)] = \"service.name\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Age</label>\n                        <input style=\"color: black;\" required type=\"number\" name=\"age\" #age=\"ngModel\" [(ngModel)] = \"service.age\"\n                        class=\"form-control\" required>\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Gender</label>\n                        <select style=\"color: black;\" required type=\"text\" name=\"gender\" #gender=\"ngModel\" [(ngModel)] = \"service.gender\"\n                        class=\"form-control\" >\n                        <option>Male</option>\n                        <option>Female</option>\n                        </select>\n                     </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <input style=\"color: black;\" readonly type=\"text\" name=\"dateOfEmployment\" #dateOfEmployment=\"ngModel\" [(ngModel)] = \"service.dateOfEmployment\"\n                        class=\"form-control\">\n                     </div>\n                    </div>\n                  </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled] = \"form.invalid\">Register</button>\n              </form>\n              <button (click) = \"Clear()\" class=\"btn btn-primary\">Clear</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <label class=\"bmd-label-floating\">Gender</label>\n                    <select style=\"color: black;\" type=\"text\" name=\"SearchGenderEmployee\" #SearchGenderEmployee=\"ngModel\" [(ngModel)] = \"service.SearchGenderEmployee\"\n                    class=\"form-control\" placeholder=\"Gender\">\n                    <option>Male</option>\n                    <option>Female</option>\n                    </select>\n                  </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                        <label class=\"bmd-label-floating\">Name</label>\n                        <input style=\"color: black;\" required type=\"text\" name=\"SearchNameEmployee\" #SearchNameEmployee=\"ngModel\" [(ngModel)] = \"service.SearchNameEmployee\"\n                        class=\"form-control\">                    </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type =\"button\" class=\"btn btn-primary\"  value=\"Search Employee\" (click) = \"SearchButton()\">\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"col-md-12\">\n    <div class=\"card card-plain\">\n      <div class=\"card-header card-header-primary\">\n        <h4 class=\"card-title mt-0\">Admins List</h4>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover\" style=\"color: white;\">\n            <thead>\n                <th >id</th>\n                <th >name</th>\n                <th >age</th>\n                <th >gender</th>\n                <th >dateOfEmployment</th>\n        </thead>\n            <tr *ngFor =\"let pd of service.Employeelist\">\n                <td (click) =\"populateForm(pd)\">{{pd.id}}</td>\n                <td (click) =\"populateForm(pd)\">{{pd.name}}</td>\n                <td (click) =\"populateForm(pd)\">{{pd.age}}</td>\n                <td (click) =\"populateForm(pd)\">{{pd.gender}}</td>\n                <td (click) =\"populateForm(pd)\">{{pd.dateOfEmployment}}</td>\n                <td>\n                    <i class=\"far fa-trash-alt fa-lg text-danger\" (click) = \"onDelete(pd)\"></i>\n                </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xl-6 col-lg-12\">\n        <div class=\"card card-chart\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Female</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\">{{userDetails.countFemaleEmployee}} Of {{userDetails.totalEmployee}} </span>\n            </p>\n          </div>\n          <div class=\"col-xl-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons fa fa-female\"></i>\n                </div>\n                <p class=\"card-category\">Female</p>\n                <h3 class=\"card-title\">{{userDetails.rangeGenderFemale}}%\n                </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\"></i>\n                  <p>Range Gander Female Employee</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              Female Employee Counte Of Total Employee\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-6 col-lg-12\">\n        <div class=\"card card-chart\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Male</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\">{{userDetails.countMaleEmployee}} Of {{userDetails.totalEmployee}} </span></p>\n          </div>\n          <div class=\"col-xl-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <div class=\"card-icon\">\n                  <i class=\"material-icons fa fa-male\"></i>\n                </div>\n                <p class=\"card-category\">Male</p>\n                <h3 class=\"card-title\">{{userDetails.rangeGenderMale}}%\n                </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\"></i>\n                  <p>Range Gander Male Employee</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              Male Employee Counte Of Total Employee\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xl-4 col-lg-12\">\n        <div class=\"card card-chart\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">20 T0 30 Old</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\">{{userDetails.countRange2030}} Of {{userDetails.totalEmployee}} </span></p>\n          </div>\n          <div class=\"col-xl-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <p class=\"card-category\">20 T0 30 Old</p>\n                <h3 class=\"card-title\">{{userDetails.range2030Range}}%\n                </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\"></i>\n                  <p>Range Age From 20 T0 30 Old Employee</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              Age From 20 T0 30 Old Employee Counte Of Total Employee\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-12\">\n        <div class=\"card card-chart\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">30 T0 40 Old</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\">{{userDetails.countRange3040}} Of {{userDetails.totalEmployee}} </span></p>\n          </div>\n          <div class=\"col-xl-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <p class=\"card-category\">30 T0 40 Old</p>\n                <h3 class=\"card-title\">{{userDetails.range3040Range}}%\n                </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\"></i>\n                  <p>Range Age From 30 T0 40 Old Employee</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              Age From 20 T0 30 Old Employee Counte Of Total Employee\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-12\">\n        <div class=\"card card-chart\">\n          <div class=\"card-header card-header-success\">\n            <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n          </div>\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">More 40 Old</h4>\n            <p class=\"card-category\">\n              <span class=\"text-success\">{{userDetails.countMore40}} Of {{userDetails.totalEmployee}} </span></p>\n          </div>\n          <div class=\"col-xl-12 col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header card-header-warning card-header-icon\">\n                <p class=\"card-category\">More 40 Old</p>\n                <h3 class=\"card-title\">{{userDetails.more40Range}}%\n                </h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-warning\"></i>\n                  <p>Range Age From More 40 Old Employee</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer\">\n            <div class=\"stats\">\n              Age From 20 T0 30 Old Employee Counte Of Total Employee\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary\">\n            <h4 class=\"card-title\">Employees Count</h4>\n          </div>\n          <div class=\"card-body table-responsive\">\n            <table class=\"table table-hover\">\n              <thead class=\"text-warning\">\n                <th>Title</th>\n                <th>Conte</th>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Total Employee</td>\n                  <td>{{userDetails.totalEmployee}}</td>\n                </tr>\n                <tr>\n                  <td>Count Male Employee</td>\n                  <td>{{userDetails.countMaleEmployee}}</td>\n                </tr>\n                <tr>\n                  <td>Count Female Employee</td>\n                  <td>{{userDetails.countFemaleEmployee}}</td>\n                </tr>\n                <tr>\n                  <td>Count Range 20 To 30</td>\n                  <td>{{userDetails.countRange2030}}</td>\n                </tr>\n                <tr>\n                  <td>Count Range 30 To 40</td>\n                  <td>{{userDetails.countRange3040}}</td>\n                </tr>                <tr>\n                  <td>Count More 40</td>\n                  <td>{{userDetails.countMore40}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-tabs card-header-warning\">\n            <div class=\"nav-tabs-navigation\">\n              <div class=\"nav-tabs-wrapper\">\n                <span class=\"nav-tabs-title\">Range Employee</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active\" id=\"profile\">\n                <table class=\"table table-hover\">\n                  <thead class=\"text-warning\">\n                    <th>Title</th>\n                    <th>Range</th>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>Range Gender Male</td>\n                      <td>{{userDetails.rangeGenderMale}}</td>\n                    </tr>\n                    <tr>\n                      <td>Range Gender Female</td>\n                      <td>{{userDetails.rangeGenderFemale}}</td>\n                    </tr>\n                    <tr>\n                      <td>Range 20 To 30 Old</td>\n                      <td>{{userDetails.range2030Range}}</td>\n                    </tr>\n                    <tr>\n                      <td>Range 30 To 40 Old</td>\n                      <td>{{userDetails.range3040Range}}</td>\n                    </tr>                <tr>\n                      <td>More 40 Range</td>\n                      <td>{{userDetails.more40Range}}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidebar\" data-color=\"purple\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-2.jpg\">\n  <div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n    </ul>\n  </div>\n</div>\n\n<div class=\"wrapper \">\n<div class=\"main-panel\">\n<nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top \" id=\"navigation-example\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" data-target=\"#navigation-example\">\n      <span class=\"sr-only\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse justify-content-end\">\n\n      <ul class=\"navbar-nav\">\n\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/user/home\" >home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/user/employeelist\" >employeelist</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink = \"/user/adminlist\" >adminlist</a>\n      </li>\n\n        <li class=\"nav-item\">\n          <button class=\"btn btn-danger my-2 my-sm-0\" (click)=\"onLogout()\">Logout</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"content\">\n  <div class=\"container\">\n\n<router-outlet></router-outlet>\n\n</div>\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _publichome_publichome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./publichome/publichome.component */
    "./src/app/publichome/publichome.component.ts");
    /* harmony import */


    var _publichome_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./publichome/homepage/homepage.component */
    "./src/app/publichome/homepage/homepage.component.ts");
    /* harmony import */


    var _publichome_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./publichome/login/login.component */
    "./src/app/publichome/login/login.component.ts");
    /* harmony import */


    var _user_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user/home/home.component */
    "./src/app/user/home/home.component.ts");
    /* harmony import */


    var _user_adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user/adminlist/adminlist.component */
    "./src/app/user/adminlist/adminlist.component.ts");
    /* harmony import */


    var _user_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user/employeelist/employeelist.component */
    "./src/app/user/employeelist/employeelist.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/app/forbidden/forbidden.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/publichome/homepage',
      pathMatch: 'full'
    }, {
      path: 'publichome',
      component: _publichome_publichome_component__WEBPACK_IMPORTED_MODULE_3__["PublichomeComponent"],
      children: [{
        path: 'homepage',
        component: _publichome_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
      }, {
        path: 'login',
        component: _publichome_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
      }]
    }, {
      path: '',
      redirectTo: '/user/home',
      pathMatch: 'full'
    }, {
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
      children: [{
        path: 'home',
        component: _user_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: {
          permittedRoles: ['Admin', 'Leader']
        }
      }, {
        path: 'adminlist',
        component: _user_adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_7__["AdminlistComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: {
          permittedRoles: ['Admin', 'Leader']
        }
      }, {
        path: 'employeelist',
        component: _user_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_8__["EmployeelistComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: {
          permittedRoles: ['Admin', 'Leader']
        }
      }]
    }, {
      path: 'forbidden',
      component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_11__["ForbiddenComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ManagesGlobitelEmployeesAngular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/service.service */
    "./src/app/shared/service.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _publichome_publichome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./publichome/publichome.component */
    "./src/app/publichome/publichome.component.ts");
    /* harmony import */


    var _publichome_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./publichome/homepage/homepage.component */
    "./src/app/publichome/homepage/homepage.component.ts");
    /* harmony import */


    var _publichome_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./publichome/login/login.component */
    "./src/app/publichome/login/login.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user/home/home.component */
    "./src/app/user/home/home.component.ts");
    /* harmony import */


    var _user_adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user/adminlist/adminlist.component */
    "./src/app/user/adminlist/adminlist.component.ts");
    /* harmony import */


    var _user_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user/employeelist/employeelist.component */
    "./src/app/user/employeelist/employeelist.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/app/forbidden/forbidden.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _publichome_publichome_component__WEBPACK_IMPORTED_MODULE_9__["PublichomeComponent"], _publichome_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"], _publichome_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"], _user_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _user_adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_14__["AdminlistComponent"], _user_employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_15__["EmployeelistComponent"], _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_18__["ForbiddenComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot()],
      providers: [_shared_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service.service */
    "./src/app/shared/service.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, service) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.service = service;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') != null) {
            var roles = next.data['permittedRoles'];

            if (roles) {
              if (this.service.roleMatch(roles)) {
                return true;
              } else {
                this.router.navigate(['/forbidden']);
                return false;
              }
            }

            return true;
          } else {
            this.router.navigate(['/publichome/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem('token');

                _this.router.navigateByUrl('/publichome/login');
              } else if (err.status == 403) {
                _this.router.navigate['/forbidden'];
              }
            }));
          } else return next.handle(req.clone());
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/forbidden/forbidden.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/forbidden/forbidden.component.ts ***!
    \**************************************************/

  /*! exports provided: ForbiddenComponent */

  /***/
  function srcAppForbiddenForbiddenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function () {
      return ForbiddenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ForbiddenComponent =
    /*#__PURE__*/
    function () {
      function ForbiddenComponent() {
        _classCallCheck(this, ForbiddenComponent);
      }

      _createClass(ForbiddenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForbiddenComponent;
    }();

    ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forbidden',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forbidden.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forbidden/forbidden.component.html")).default
    })], ForbiddenComponent);
    /***/
  },

  /***/
  "./src/app/publichome/homepage/homepage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/publichome/homepage/homepage.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppPublichomeHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomepageComponent =
    /*#__PURE__*/
    function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homepage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/homepage/homepage.component.html")).default
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/publichome/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/publichome/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPublichomeLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service.service */
    "./src/app/shared/service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(service, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
          UserName: '',
          Password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') != null) {
            this.router.navigateByUrl('/home');
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this2 = this;

          this.service.login(form.value).subscribe(function (res) {
            _this2.toastr.success('Success', 'LogIn');

            localStorage.setItem('token', res.token);

            _this2.router.navigateByUrl('/user/home');
          }, function (err) {
            if (err.status == 400) alert('Incorrect username or password.');else console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/login/login.component.html")).default
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/publichome/publichome.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/publichome/publichome.component.ts ***!
    \****************************************************/

  /*! exports provided: PublichomeComponent */

  /***/
  function srcAppPublichomePublichomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublichomeComponent", function () {
      return PublichomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PublichomeComponent =
    /*#__PURE__*/
    function () {
      function PublichomeComponent() {
        _classCallCheck(this, PublichomeComponent);
      }

      _createClass(PublichomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublichomeComponent;
    }();

    PublichomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-publichome',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./publichome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/publichome/publichome.component.html")).default
    })], PublichomeComponent);
    /***/
  },

  /***/
  "./src/app/shared/service.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/service.service.ts ***!
    \*******************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppSharedServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ServiceService =
    /*#__PURE__*/
    function () {
      function ServiceService(fb, http, toastr) {
        _classCallCheck(this, ServiceService);

        this.fb = fb;
        this.http = http;
        this.toastr = toastr; // URL = 'http://osamadj-001-site1.itempurl.com/api/';

        this.URL = 'http://localhost:59458/api/';
        this.formModel = this.fb.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
          Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
          FullName: [''],
          Passwords: this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          })
        });
      }

      _createClass(ServiceService, [{
        key: "UpdateformModel",
        value: function UpdateformModel() {
          this.id = '';
          this.fullName = '';
          this.userName = '';
          this.Password = '';
          this.name = '';
          this.gender = '';
          this.age = null;
          this.dateOfEmployment = '';
          this.SearchGenderEmployee = '';
          this.SearchNameEmployee = '';
        }
      }, {
        key: "GetEmployeeList",
        value: function GetEmployeeList() {
          var _this3 = this;

          return this.http.get(this.URL + 'EmployeesAPI').toPromise().then(function (res) {
            return _this3.Employeelist = res;
          });
        }
      }, {
        key: "DeleteEmployee",
        value: function DeleteEmployee(id) {
          return this.http.delete(this.URL + 'EmployeesAPI/' + id);
        }
      }, {
        key: "RegisterEmployee",
        value: function RegisterEmployee() {
          var body = {
            id: this.id,
            Name: this.name,
            age: this.age,
            Gender: this.gender,
            DateOfEmployment: this.dateOfEmployment
          };
          return this.http.post(this.URL + 'EmployeesAPI', body);
        }
      }, {
        key: "SearchEmployee",
        value: function SearchEmployee() {
          var _this4 = this;

          var body = {
            id: this.id,
            Name: this.SearchNameEmployee,
            Age: "",
            Gender: this.SearchGenderEmployee,
            DateOfEmployment: this.dateOfEmployment
          };
          return this.http.post(this.URL + 'EmployeesAPI/SearchEmployee', body).subscribe(function (data) {
            return _this4.Employeelist = data;
          });
        }
      }, {
        key: "Delete",
        value: function Delete(id) {
          return this.http.delete(this.URL + 'AccountAPI/' + id);
        }
      }, {
        key: "GetUsersList",
        value: function GetUsersList() {
          var _this5 = this;

          return this.http.get(this.URL + 'AccountAPI/GetUserAll').toPromise().then(function (res) {
            return _this5.list = res;
          });
        }
      }, {
        key: "RegisterAdmin",
        value: function RegisterAdmin() {
          var body = {
            Id: this.id,
            UserName: this.userName,
            FullName: this.fullName,
            Password: this.Password,
            Oldpassword: this.Oldpassword,
            Role: this.role
          };
          return this.http.post(this.URL + 'AccountAPI/RegisterUser', body);
        }
      }, {
        key: "login",
        value: function login(formData) {
          return this.http.post(this.URL + 'AccountAPI/Login', formData);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          var tockenheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer' + localStorage.getItem('token')
          });
          return this.http.get(this.URL + 'AccountAPI/GetUserProfile');
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
          var UserRole = payLoad.role;
          allowedRoles.forEach(function (element) {
            if (UserRole == element) {
              isMatch = true;
              return false;
            }
          });
          return isMatch;
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ServiceService);
    /***/
  },

  /***/
  "./src/app/user/adminlist/adminlist.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/adminlist/adminlist.component.ts ***!
    \*******************************************************/

  /*! exports provided: AdminlistComponent */

  /***/
  function srcAppUserAdminlistAdminlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminlistComponent", function () {
      return AdminlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service.service */
    "./src/app/shared/service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AdminlistComponent =
    /*#__PURE__*/
    function () {
      function AdminlistComponent(service, toastr) {
        _classCallCheck(this, AdminlistComponent);

        this.service = service;
        this.toastr = toastr;
      }

      _createClass(AdminlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.UpdateformModel();
          this.service.GetUsersList();
          this.Clear();
          this.toastr.success('Here You Can Add Or Edit Or Delete Another Account To Manage Employee List', '');
        }
      }, {
        key: "Clear",
        value: function Clear() {
          this.service.id = "";
          this.service.userName = "";
          this.service.fullName = null;
          this.service.Password = "";
          this.service.Oldpassword = "";
        }
      }, {
        key: "populateForm",
        value: function populateForm(pd) {
          this.service.id = pd.id;
          this.service.fullName = pd.fullName;
          this.service.Password = '';
          this.service.Oldpassword = '';
          this.service.userName = pd.userName;
          this.service.role = pd.role;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this6 = this;

          this.service.RegisterAdmin().subscribe(function (res) {
            _this6.toastr.success('Success', '');

            _this6.service.UpdateformModel();

            _this6.service.GetUsersList();

            _this6.Clear();
          }, function (err) {
            alert('Enter Password OR Other Password');
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(pd) {
          var _this7 = this;

          if (confirm("Are You sure to delete this record ?")) {
            this.service.Delete(pd.id).subscribe(function (res) {
              _this7.Clear();

              _this7.toastr.success('Success', 'Delete');

              _this7.service.GetUsersList();
            }, function (err) {
              alert('Deleted Successfully');
            });
          }
        }
      }]);

      return AdminlistComponent;
    }();

    AdminlistComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    AdminlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-adminlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/adminlist/adminlist.component.html")).default
    })], AdminlistComponent);
    /***/
  },

  /***/
  "./src/app/user/employeelist/employeelist.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/employeelist/employeelist.component.ts ***!
    \*************************************************************/

  /*! exports provided: EmployeelistComponent */

  /***/
  function srcAppUserEmployeelistEmployeelistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function () {
      return EmployeelistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/service.service */
    "./src/app/shared/service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var EmployeelistComponent =
    /*#__PURE__*/
    function () {
      function EmployeelistComponent(service, toastr) {
        _classCallCheck(this, EmployeelistComponent);

        this.service = service;
        this.toastr = toastr;
      }

      _createClass(EmployeelistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.service.UpdateformModel();
          this.service.GetEmployeeList();
          this.toastr.success('Here You Can Add Or Edit Or Delete Employee', '');
        }
      }, {
        key: "Clear",
        value: function Clear() {
          this.service.id = "";
          this.service.gender = "";
          this.service.age = null;
          this.service.name = "";
          this.service.dateOfEmployment = "";
        }
      }, {
        key: "populateForm",
        value: function populateForm(pd) {
          this.service.id = pd.id;
          this.service.name = pd.name;
          this.service.age = pd.age;
          this.service.gender = pd.gender;
          this.service.dateOfEmployment = pd.dateOfEmployment;
        }
      }, {
        key: "onDelete",
        value: function onDelete(pd) {
          var _this8 = this;

          if (confirm("Are You sure to delete this record ?")) {
            this.service.DeleteEmployee(pd.id).subscribe(function (res) {
              _this8.toastr.success('Success', 'Delete');

              _this8.service.GetEmployeeList();
            }, function (err) {
              alert('Deleted Successfully');
            });
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this9 = this;

          this.service.RegisterEmployee().subscribe(function (res) {
            _this9.toastr.success('Success', '');

            _this9.service.UpdateformModel();

            _this9.service.GetEmployeeList();
          }, function (err) {
            alert('Create user is not enable');
          });
        }
      }, {
        key: "SearchButton",
        value: function SearchButton() {
          this.service.SearchEmployee();
        }
      }]);

      return EmployeelistComponent;
    }();

    EmployeelistComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employeelist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employeelist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/employeelist/employeelist.component.html")).default
    })], EmployeelistComponent);
    /***/
  },

  /***/
  "./src/app/user/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUserHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/service.service */
    "./src/app/shared/service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, service, toastr) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.service = service;
        this.toastr = toastr;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.toastr.success('Here You Can See Staff stats', '');
          this.service.getUserProfile().subscribe(function (data) {
            return _this10.userDetails = data;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_shared_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html")).default
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/service.service */
    "./src/app/shared/service.service.ts");

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(router, service) {
        _classCallCheck(this, UserComponent);

        this.router = router;
        this.service = service;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.GetRole();

          if (this.service.formModel.value.Role == 'Admin') {
            this.ShowAdminPanel = true;
          } else {
            this.ShowAdminPanel = false;
          }

          if (this.service.formModel.value.Role == 'Admin') {
            this.ShowLeaderPanel = true;
            this.ShowAdminPanel = true;
          }
        }
      }, {
        key: "GetRole",
        value: function GetRole() {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
          var UserRole = payLoad.role;
          this.service.formModel.value.Role = UserRole;
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem('token');
          this.router.navigate(['/publichome/homepage']);
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _shared_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default
    })], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\ASP.net\ASP.net Core\ManagesAccountEmployees\AngularProject\ManagesGlobitelEmployeesAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav-bar></nav-bar>\n\n<div >\n    <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/availablel-osta/availablel-osta.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/availablel-osta/availablel-osta.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section >\n\n \n\n    <div class=\"container\" >\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div *ngIf=\"avialableOsta.length\" >\n                    <div class=\"wrapper fadeInDown\" *ngFor=\"let osta of avialableOsta\" >\n                    \n                        <div id=\"formContent\" >\n                            <div class=\"col-lg-4 col-md-4 col-sm-4\" >\n                                <img src=\"../../assets/images/carpenter 2.png\" id=\"icon\" alt=\"User Icon\" height=\"150\" width=\"200\"/>\n                            </div>\n                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 handyman-cls\" >\n                                    <h4>{{ osta.full_name }} <i class=\"fa fa-user\" ></i></h4>\n                                    <h5>{{ arr[osta.craft -1] }} <i class=\"fa fa-anchor\" ></i></h5>\n                                    <h5>{{ osta.phone_number }} <i class=\"fa fa-mobile\" ></i></h5>\n                                    <button class=\"btn btn-primary\" >احجز</button>\n                            </div>\n                    \n\n                        </div>\n                        \n                    </div>\n                </div>\n\n                <div  *ngIf=\"!avialableOsta.length\">\n                     <h1 style=\"color: red; text-align: center; margin-top: 200px; \"> لا يوجد صنايعى متاح الان</h1>\n                </div>\n            </div>\n        </div>\n    </div>\n    </section>\n    <!-- End Our login -->\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/be-osta/be-osta.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/be-osta/be-osta.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12 col-md-12 col-sm-12\">\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n    \n        <!-- Icon -->\n        <img src=\"../../assets/images/logo3.png\" id=\"icon\" alt=\"User Icon\" height=\"200\" width=\"150\"/>\n    \n        <form #f=\"ngForm\" (ngSubmit)= \"submit(f)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"fadeIn second\" \n                ngModel name=\"name\" #name=\"ngModel\" required\n                placeholder=\"  الإسم بالكامل\">\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" \n                  class=\"alert alert-danger\">\n                <div *ngIf=\"name.errors.required\">\n                      يجب ادخال الاسم صحيح\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"fadeIn second\" \n                ngModel name=\"phone\" placeholder=\"   رقم الهاتف\"\n                #phone=\"ngModel\"\n                pattern=\"(?=.*\\d).{11,}\"  required>\n            <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" \n                class=\"alert alert-danger\">\n              <div *ngIf=\"phone.errors.required\">\n                  يجب ادخال رقم تيلفون صحيح\n              </div>\n              <div *ngIf=\"phone.errors.pattern\">\n                  رقم التيلفون يجب الا يقل عن 11 رقم\n              </div>\n            </div>\n          </div>\n          <input type=\"text\" class=\"fadeIn second\" name=\"aboutServive\" \n                ngModel #aboutServive=\"ngModel\" placeholder=\" اسم المستخدم\">\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"fadeIn third\" \n                ngModel #password=\"ngModel\" name=\"password\" \n                placeholder=\"كلمة المرور\" \n                required pattern=\"(?=.*\\d).{8,}\" >\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" \n                class=\"alert alert-danger\">\n              <div *ngIf=\"password.errors.required\">\n                يجب ادخال كلمة المرور \n              </div>\n              <div *ngIf=\"password.errors.pattern\">\n                كلمة المرور يجب ان لا تقل عن 8 احرف او ارقام\n              </div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <input type=\"password\" name=\"confPass\" class=\"fadeIn second\" \n              placeholder=\"أعد كتابة كلمة المرور\"\n              ngModel\n              #confPass=\"ngModel\" required  required pattern=\"(?=.*\\d).{8,}\">\n          \n            <div *ngIf=\"confPass.invalid && (confPass.dirty || confPass.touched)\" \n                class=\"alert alert-danger\">\n                <div *ngIf=\"confPass.errors.pattern\">\n                  اعد كتابة كلمة المرور \n                </div>\n              <div *ngIf=\"confPass.errors.required\">\n                يجب تأكيد كلمة المرور \n              </div>\n              \n          </div>\n        </div>\n  \n          \n          \n          <select  style=\"color: black;\"  ngModel #city=\"ngModel\" class=\"fadeIn second\" name=\"city\">\n              <option  style=\"color: black;\" value=\"Location\">المدينة</option>\n              <option  style=\"color: black;\" value=\"المنصورة\">المنصورة</option>\n              <option  style=\"color: black;\"  value=\"الجيزه\">الجيزة</option>\n          </select>\n  \n  \n          <select  style=\"color: black;\"  ngModel #servive=\"ngModel\" class=\"fadeIn second\" name=\"servive\">\n              <option  style=\"color: black;\" selected value=\"Location\">نوع المهنه</option>\n              <option  style=\"color: black;\" value=\"1\">سباكه</option>\n              <option  style=\"color: black;\" value=\"2\">نجارة</option>\n              <option  style=\"color: black;\" value=\"3\">كهرباء </option>\n              <option  style=\"color: black;\"  value=\"4\">أجهزة كهربائية</option>\n              <option  style=\"color: black;\" value=\"5\">تشطيبات وديكورات</option>\n              <option  style=\"color: black;\" value=\"6\"> نقاشة</option>\n              <option  style=\"color: black;\" value=\"7\">ألوميتال</option>\n              <option  style=\"color: black;\" value=\"8\">حدادة</option>\n              <option  style=\"color: black;\" value=\"9\">مبلط </option>\n              <option  style=\"color: black;\" value=\"10\">تكييف وتبريد</option>\n              <option  style=\"color: black;\" value=\"11\">تركيب ستالايت وكاميرات</option>\n          </select>\n\n          \n          <input type=\"text\" class=\"fadeIn second\" name=\"exepYear\" \n                ngModel #exepYear=\"ngModel\" required placeholder=\" عدد سنين الخبرة \">\n          <div *ngIf=\"confPass.invalid && (confPass.dirty || confPass.touched)\" \n              class=\"alert alert-danger\">\n        \n            <div *ngIf=\"confPass.errors.required\">\n              يجب ادخال عدد سنين الخبره\n            </div>\n        \n           </div>\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\" إنشاء مستخدم\">\n        </form>\n    \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conact-us/conact-us.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conact-us/conact-us.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contactId\" class=\"contact-us2 text-center\" style=\"background-color:#f6f6f6\">\n        <!-- <div class=\"fields\"> -->\n            <div class=\"container\">\n                <div class=\"row\">\n                    <i class=\"fa fa-headphones fa-5x\"></i>\n                    <h2 class=\"h1\">شاركنا برأيك</h2>\n                    <p class=\"lead\">كلمنا في أي وقت</p>\n                                            \n                    <form role=\"form\">\n                        <div class=\"col-md-6 wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"100\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control input-lg\" placeholder=\"اسم المستخدم\">\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control input-lg\" placeholder=\"البريد الالكتروني\">\n                            </div>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control input-lg\" placeholder=\"رقم الهاتف \">\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 wow bounceInRight\" data-wow-duration=\"1s\" data-wow-offset=\"100\">\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control input-lg\" placeholder=\"اترك رسالتك\"></textarea>\n                            </div>\n                            <button type=\"button\" class=\"btn btn-lg btn-block\">تواصل معنا</button>\n                        </div>\n                    </form>\n                                        \n                </div>\n            </div>\n        <!-- </div> -->\n    </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n<div id=\"myslide\" class=\"carousel slide \" data-ride=\"carousel\">\n\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myslide\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myslide\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myslide\" data-slide-to=\"2\"></li>\n      <li data-target=\"#myslide\" data-slide-to=\"3\"></li>\n    </ol>\n  \n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n          <div style=\"height:720px;\">\n              <img src=\"../../assets/images/03-2.jpg\" width=\"1550\" height=\"720\"  alt=\"Pic 3\" >\n          </div> \n        \n          <div class=\"carousel-caption \">\n              <h2 style=\"font-family: 'Courier New', Courier, monospace;\" class=\"h1\">Changing your Culture</h2>\n              <h2 class=\"h1\" style=\"font-size:40px;\">مش أي حد هيدخل بيتك</h2>\n              <a routerLink=\"/order\"><button value=\"اطلب أوسطفندي\" class=\"osta-btn\" >اطلب أوسطفندي</button></a>\n              \n              <!-- <button type=\"button\" class=\"btn btn-lg btn-block\" style=\"background-color: rgb(238, 102, 26);\"> اطلب اوسطفندي</button> -->\n          </div>\n      </div> \n    </div>\n  \n    <a class=\"left carousel-control\" href=\"#myslide\" role=\"button\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    \n    <a class=\"right carousel-control\" href=\"#myslide\" role=\"button\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    </a>\n    \n  </div>\n\n  <!-- End Carousel -->\n  \n  \n  \n  <!-- Start Section Features -->\n  \n  <section class=\"features text-center\" id=\"servicesId\">\n      <div class=\"container\">\n          <h2 class=\"h1\">خدماتنا</h2>\n          <div class=\"row\">\n              \n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/carpenter.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h3> سباكه</h3> -->\n                  </div>\n                  \n              </div>\n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/blumper.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h3> اخري</h3> -->\n                  </div>\n                  \n              </div>\n\n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/Electricity.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h3> اخري</h3> -->\n                  </div>\n                  \n              </div>\n\n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/ELECTRONICS.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h3> اخري</h3> -->\n                  </div>\n                  \n              </div>\n   \n          </div>\n\n\n          <div class=\"row\">\n              \n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/ELECTRIC-D.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h3> اخري</h3> -->\n                  </div>\n                  \n              </div>\n              \n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInDown\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/CCTV.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h4> صيانه</h4> -->\n                  </div>\n                  \n              </div>\n              \n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInUp\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/Paints.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h4> نجاره</h4> -->\n                  </div>\n                  \n              </div>\n              \n              <div class=\"col-lg-3 col-md-6\">\n                  \n                  <div class=\"feat wow bounceInRight\" data-wow-duration=\"1s\" data-wow-offset=\"200\">\n                      <img src=\"../../assets/images/metalworks.png\" alt=\"\" width=\"150px\" height=\"150px\">\n                      <!-- <h4> سباكه</h4> -->\n                      \n                  </div>\n                  \n              </div>\n              <a routerLink=\"/order\"><button value=\"اطلب وسطفندي\" class=\"osta-btn\" >اطلب أوسطفندي</button></a> \n\n          </div>\n\n      </div>\n  </section>\n  \n  <!-- End Section Features -->\n  \n  <!-- start Section why reserve  -->\n\n  <section class=\"about text-center wow bounceIn\" data-wow-duration=\"2s\" data-wow-offset=\"300\" style=\"background-color:#f6f6f6\">\n      <div class=\"container\">\n          <h1 class=\"h1\">ازاي تحجز مع <span style=\"color: rgb(255, 145, 0);\"> أوسطفندي</span></h1>\n          <div class=\"row\">\n              \n              <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                  <img src=\"../../assets/images/stopwatch.png\" alt=\"\" height=\"100\" width=\"100\">\n                  <h4 >   احجز موعدك</h4>\n                  <p>you can search for your favourite craftsman.</p>\n              </div>\n              \n              <div class=\"col-lg-3 col-md-6 col-sm-12 \">\n                  <img src=\"../../assets/images/worker.png\" alt=\"\" height=\"100\" width=\"100\">\n                  <h4 >  قارن وإختار</h4>\n                  <p>you can search for your favourite craftsman.</p>\n              </div>\n\n              <div class=\"col-lg-3 col-md-6 col-sm-12 \">\n                  <img src=\"../../assets/images/search-3.png\" alt=\"\" height=\"100\" width=\"100\">\n                  <h4 >دوّر على أوسطفندي</h4>\n                  <p>you can search for your favourite craftsman.</p>\n              </div>\n\n              <div class=\"col-lg-3 col-md-6 col-sm-12 \">\n                  <img src=\"../../assets/images/key.png\" alt=\"\" height=\"100\" width=\"100\">\n                  <h4 > سجّل معانا</h4>\n                  <p>you can search for your favourite craftsman.</p>\n              </div>\n\n          </div>\n      </div>\n  </section>\n  <!-- end Section why reserve  -->\n\n   <!-- Start FAQ Intro -->\n  \n   <section class=\"faq text-center\">\n      <h1 class=\"h1\">  الأسئلة المتكرره علي <span> أوسطفندي</span></h1>\n      <div class=\"container\">\n          <!-- <p class=\"lead\">Here You Will Find All Questions You Are Searching For And The Full Knowledgebase</p> -->\n      </div>\n  </section>\n  \n  <!-- End FAQ Intro -->\n  \n  <!-- Start FAQ Accordion -->\n  \n  <section class=\"faq-questions\">\n      <div class=\"container\">\n          <div class=\"panel-group\" id=\"accordion\" roles=\"tablist\" aria-multiselectable=\"true\">\n              \n              <!-- Start Question 1 -->\n              \n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" roles=\"tab\" id=\"heading-one\">\n                      <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-one\" aria-expanded=\"true\" arial-controls=\"collapse-one\">\n                               ليه تطلب أوسطفنـدي؟\n                          </a>\n                      </h4>\n                  </div>\n                  <div id=\"collapse-one\" class=\"panel-collapse collapse\" roles=\"tabpanel\" aria-labelledby=\"heading-one\">\n                      <div class=\"panel-body\">\n                          أوسطفندي شركة توفر لك أفضل الصنايعية في تخصصات مختلفة علي منصة واحدة </div>\n                  </div>\n              </div>\n              \n              <!-- End Question 1 -->\n              \n              <!-- Start Question 2 -->\n              \n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" roles=\"tab\" id=\"heading-two\">\n                      <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-two\" aria-expanded=\"true\" arial-controls=\"collapse-two\">\n                              كيف أطلب أوسطفنـدي؟\n                          </a>\n                      </h4>\n                  </div>\n                  <div id=\"collapse-two\" class=\"panel-collapse collapse\" roles=\"tabpanel\" aria-labelledby=\"heading-two\">\n                      <div class=\"panel-body\">\n                              بتسجيل بياناتك الأساسية فقط تستطيع عندئذ التواصل مع كافة الصنايعية، فقط إختر المنطقة و المدينة والتخصص الذي تريد وسيظهر لك الصنايعية المتاحين  \n                      </div>\n                  </div>\n              </div>\n              \n              <!-- End Question 2 -->\n              \n              <!-- Start Question 3 -->\n              \n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" roles=\"tab\" id=\"heading-three\">\n                      <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-three\" aria-expanded=\"true\" arial-controls=\"collapse-three\">\n                              كيف تتم محاسبة الأوسطفنـدي؟\n                          </a>\n                      </h4>\n                  </div>\n                  <div id=\"collapse-three\" class=\"panel-collapse collapse\" roles=\"tabpanel\" aria-labelledby=\"heading-three\">\n                      <div class=\"panel-body\">\n                          الشركة توفر لكل الصنايعية نظام التسعير الذكي الخاص بها الذي يصدر فاتورة إليكترونية فورية للعميل بها كافة البيانات المتعلقة بسعر المصنعية و كيفية تحديدها   \n                      </div>\n                  </div>\n              </div>\n              \n              <!-- End Question 3 -->\n              \n              <!-- Start Question 4 -->\n              \n              <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\" roles=\"tab\" id=\"heading-four\">\n                      <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse-four\" aria-expanded=\"true\" arial-controls=\"collapse-four\">\n                              هل سعر أوسطفنـدي عالي؟\n                          </a>\n                      </h4>\n                  </div>\n                  <div id=\"collapse-four\" class=\"panel-collapse collapse\" roles=\"tabpanel\" aria-labelledby=\"heading-four\">\n                      <div class=\"panel-body\">\n                              بالطبع لا؛ فالشركة لا تأخذ نسبة من مصنعية الصنايعي و هذا من الميزات الفريدة التي تمتلكها الشركة دون غيرها                            </div>\n                  </div>\n              </div>\n              \n              <!-- End Question 4 -->\n              \n          </div>\n      </div>\n  </section>\n  \n  <!-- End FAQ Accordion -->\n\n  <!-- Start Section Contact Us -->\n  \n  <section id=\"contactId\" class=\"contact-us2 text-center\" style=\"background-color:#f6f6f6\">\n      <!-- <div class=\"fields\"> -->\n          <div class=\"container\">\n              <div class=\"row\">\n                  <i class=\"fa fa-headphones fa-5x\"></i>\n                  <h2 class=\"h1\">شاركنا برأيك</h2>\n                  <p class=\"lead\">كلمنا في أي وقت</p>\n                                          \n                  <form role=\"form\">\n                      <div class=\"col-md-6 wow bounceInLeft\" data-wow-duration=\"1s\" data-wow-offset=\"100\">\n                          <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control input-lg\" placeholder=\"اسم المستخدم\">\n                          </div>\n                          <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control input-lg\" placeholder=\"البريد الالكتروني\">\n                          </div>\n                          <div class=\"form-group\">\n                              <input type=\"text\" class=\"form-control input-lg\" placeholder=\"رقم الهاتف \">\n                          </div>\n                      </div>\n                      <div class=\"col-md-6 wow bounceInRight\" data-wow-duration=\"1s\" data-wow-offset=\"100\">\n                          <div class=\"form-group\">\n                              <textarea class=\"form-control input-lg\" placeholder=\"اترك رسالتك\"></textarea>\n                          </div>\n                          <button type=\"button\" class=\"btn btn-lg btn-block\">تواصل معنا</button>\n                      </div>\n                  </form>\n                                      \n              </div>\n          </div>\n      <!-- </div> -->\n  </section>\n  \n  <!-- End Section Contact Us -->\n  <section class=\"footer2\">\n    <div class=\"container\">\n        <div class=\"row\" dir=\"rtl\">\n            \n            \n            <div class=\"out\">\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6 footercol\">\n                <a class=\"\" href=\"index.html\"><h4>تواصل معنا</h4></a><br>\n                <a href=\"\" style=\"font-family: 'Droid Arabic Kufi', serif;\">خدمة العمــلاء : 01200006293</a><br>\n                <a href=\"\" style=\"font-family: 'Droid Arabic Kufi', serif;\">رقم الواتساب : 01275500234</a><br>\n                <a href=\"\" style=\"font-family: 'Droid Arabic Kufi', serif;\">رقم الواتساب : 01275500345</a><br>\n                <div class=\"row\">\n                    <a href=\"\"><i class=\"fa fa-facebook fa-2x\"></i></a> \n                    <a href=\"\"><i class=\"fa fa-twitter fa-2x\"></i></a>\n                    <a href=\"\"><i class=\"fa fa-instagram fa-2x\"></i></a>\n                </div> \n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6 footercol\" >\n                <a class=\"\" href=\"index.html\"><h4>تحتاج للمساعده ؟</h4></a><br>\n                <a href=\"index.html#contactId\">اتصل بنا</a><br>\n                <a href=\"\">اتفاقية الخصوصية</a><br> \n                <a href=\"\">اتفاقية الخصوصية للأوسطفندي</a><br>      \n            </div>\n\n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6 footercol\">\n                <a class=\"\" href=\"index.html\"><h4>هل أنت صنايعي ؟</h4></a><br>\n                <a href=\"\">خليك أوسطفندي</a><br>\n            </div>\n            \n            <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-6 footercol\" >\n                <a class=\"\" href=\"index.html\"><h4>أوسطفندي</h4></a><br>\n                <a href=\"\">من نحن</a><br>\n                <a href=\"\">وظائف وتدريب</a><br>\n            </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n\n  <section style=\"background-color:#2977dfef ; color: cornsilk ;\" >\n      <div class=\"copyright text-center\" >\n          Copyright &copy; 2019 <span>Ostafandy</span> .Inc\n      </div>\n  </section>\n  \n  \n  <div id=\"scroll-top\">\n      <i class=\"fa fa-chevron-up fa-3x\"></i>\n  </div>\n  \n  <!-- End Scroll To Top -->\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"wrapper fadeInDown\">\n                  <div id=\"formContent\">\n                    <!-- Tabs Titles -->\n                \n                    <!-- Icon -->\n                    <img src=\"../../assets/images/logo3.png\" id=\"icon\" alt=\"User Icon\" height=\"200\" width=\"150\"/>\n                \n                    <!-- <div id=\"formFooter\">\n                        <img src=\"images/logo3.png\" id=\"icon\" alt=\"User Icon\" />\n                    </div> -->\n                    <!-- Login Form -->\n                    <form  #f=\"ngForm\" (ngSubmit)= \"submit(f)\"> \n                      <input type=\"text\" ngModel id=\"login\" class=\"fadeIn second\" name=\"phone\" required placeholder=\"اسم المستخدم \">\n                      <input type=\"password\" ngModel id=\"password\" class=\"fadeIn third\" name=\"password\" required placeholder=\"كلمة المرور\">\n                      <input type=\"submit\" class=\"fadeIn fourth\" value=\"تسجيل دخول\">\n                    </form>\n                \n                    <!-- Remind Passowrd -->\n                    <div id=\"formFooter\">\n                      <a class=\"\" href=\"#\" style=\"margin-left:40px\">نسيت كلمة السرّ ؟</a>\n                      <a class=\"\" routerLink=\"/signup\">تسجيل مستخدم جديد</a>\n    \n                    </div>\n                \n                  </div>\n                </div>\n          </div>\n    \n        </div>\n        \n      </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#ournavbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand wobble-horizontal\" href=\"#\">Osta <span>afandy.</span></a> -->\n      <a class=\"navbar-brand wobble-horizontal\" href=\"index.html\"><img src=\"../../assets/images/logo.png\" height=\"80px\" width=\"150px;\" alt=\"\"></a>\n\n      <!-- <a class=\"navbar-brand wobble-horizontal\" href=\"#\"><span><img src=\"images/logo.png\" alt=\"\"></span> </a>  -->\n    </div>\n    <div  class=\"collapse navbar-collapse\" id=\"ournavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li><a routerLink=\"/contactUs\"> اتصل بنا</a></li> \n\n        <li *ngIf=\"checkuser()\" (click)=\"logout()\" ><a routerLink=\"/\"> تسجيل خروج</a></li>\n        <li *ngIf=\"checkosta()\" ><a routerLink=\"/ostaProfile\"> ملفى الشخصى</a></li>\n\n        <li *ngIf=\"!checkuser()\" ><a routerLink=\"/login\"> تسجيل دخول</a></li>\n        \n        <li><a routerLink=\"/beosta\"> خليك أوسطفندي</a></li>\n        <li class=\"active\"><a href=\"index.html\">أوسطفندي</a></li>\n  \n      </ul>\n    </div>\n  </div> <!-- End Of The Container -->\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-lg-12 col-md-12 col-sm-12\">\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n    \n        <!-- Icon -->\n        <img src=\"../../assets/images/logo3.png\" id=\"icon\" alt=\"User Icon\" height=\"200\" width=\"150\"/>\n    \n  \n        <form #f=\"ngForm\" (ngSubmit)= \"submit(f)\">\n  \n          <select style=\"color: black;\" id=\"login\" ngModel name=\"selected\" #selected=\"ngModel\" class=\"fadeIn second\" >\n              <option style=\"color: black !important;\" value=\"0\">نوع الخدمة</option>\n              <option style=\"color: black;\" value=\"1\">سباكه</option>\n              <option style=\"color: black;\" value=\"2\">نجارة</option>\n              <option style=\"color: black;\" value=\"3\">كهرباء </option>\n              <option style=\"color: black;\" value=\"4\">أجهزة كهربائية</option>\n              <option style=\"color: black;\" value=\"5\">تشطيبات وديكورات</option>\n              <option style=\"color: black;\" value=\"6\"> نقاشة</option>\n              <option style=\"color: black;\" value=\"7\">ألوميتال</option>\n              <option style=\"color: black;\" value=\"8\">حدادة</option>\n              <option style=\"color: black;\" value=\"9\">مبلط </option>\n              <option style=\"color: black;\" value=\"10\">تكييف وتبريد</option>\n              <option style=\"color: black;\" value=\"11\">تركيب ستالايت وكاميرات</option>\n          </select>\n          <select style=\"color: black;\" id=\"login\" class=\"fadeIn second\" name=\"login\">\n              <option style=\"color: black;\" value=\"Location\">المدينة</option>\n              <option style=\"color: black;\" value=\"director\">المنصورة</option>\n              <option style=\"color: black;\" value=\"manager\">الجيزة</option>\n          </select>\n          <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\" العنوان\">\n          <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"    تحديد المشكلة ان أمكن\">\n  \n          <!-- <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"  ما هو الميعاد المناسب لحضرتك\"> -->\n  \n          <!-- <a href=\"handymen.html\"><input type=\"submit\" class=\"fadeIn fourth\" value=\" أطلب أوسطفندي\"></a>  -->\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\" أطلب أوسطفندي\">\n        </form>\n\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/osta-profile/osta-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/osta-profile/osta-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- start Our signup -->\n\n<div class=\"col-lg-12 col-md-12 col-sm-12\">\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n    \n        <!-- Icon -->\n        <img src=\"../../assets/images/logo3.png\" id=\"icon\" alt=\"User Icon\" height=\"200\" width=\"150\"/>\n    \n        <form #f=\"ngForm\" (ngSubmit)= \"submit(f)\">\n         \n          <h4> مرحــباً  </h4>\n\n\n  \n          <select style=\"color: black;\" id=\"login\" class=\"fadeIn second\" \n            name=\"status\" ngModel #status=\"ngModel\">\n              <option style=\"color: black;\" value=\"-1\u2029\">الحالــة اليوميــــة\u2029</option>\n              <option style=\"color: black;\" value=\"1\">متاح\u2029</option>\n              <option style=\"color: black;\" value=\"0\">غير متاح\u2029</option>  \n          </select>\n  \n          <input type=\"submit\" class=\"fadeIn fourth available-btn\" value=\"تأكيــد\">\n  \n        </form>\n    \n      </div>\n    </div>\n  </div>\n  <!-- end Our signup -->\n  \n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"wrapper fadeInDown\">\n            <div id=\"formContent\">\n              <!-- Tabs Titles -->\n          \n              <!-- Icon -->\n              <img src=\"../../assets/images/logo3.png\" id=\"icon\" alt=\"User Icon\" height=\"200\" width=\"150\"/>\n          \n              <!-- <div id=\"formFooter\">\n                  <img src=\"images/logo3.png\" id=\"icon\" alt=\"User Icon\" />\n              </div> -->\n              <!-- Login Form -->\n              <form #f=\"ngForm\" (ngSubmit)= \"submit(f)\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"fadeIn second\" \n                        ngModel name=\"name\" #name=\"ngModel\" required\n                        placeholder=\"  الإسم بالكامل\">\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" \n                          class=\"alert alert-danger\">\n                        <div *ngIf=\"name.errors.required\">\n                              يجب ادخال الاسم صحيح\n                        </div>\n                    </div>\n                  </div>\n                  <input type=\"text\" class=\"fadeIn second\" name=\"aboutServive\" \n                  ngModel #aboutServive=\"ngModel\" placeholder=\" اسم المستخدم\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"fadeIn second\" \n                        ngModel name=\"phone\" placeholder=\"   رقم الهاتف\"\n                        #phone=\"ngModel\"\n                        pattern=\"(?=.*\\d).{11,}\"  required>\n                    <div *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\" \n                        class=\"alert alert-danger\">\n                      <div *ngIf=\"phone.errors.required\">\n                          يجب ادخال رقم تيلفون صحيح\n                      </div>\n                      <div *ngIf=\"phone.errors.pattern\">\n                          رقم التيلفون يجب الا يقل عن 11 رقم\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"fadeIn third\" \n                        ngModel #password=\"ngModel\" name=\"password\" \n                        placeholder=\"كلمة المرور\" \n                        required pattern=\"(?=.*\\d).{8,}\" >\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" \n                        class=\"alert alert-danger\">\n                      <div *ngIf=\"password.errors.required\">\n                        يجب ادخال كلمة المرور \n                      </div>\n                      <div *ngIf=\"password.errors.pattern\">\n                        كلمة المرور يجب ان لا تقل عن 8 احرف او ارقام\n                      </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"confPass\" class=\"fadeIn second\" \n                      placeholder=\"أعد كتابة كلمة المرور\"\n                      ngModel\n                      #confPass=\"ngModel\" required  required pattern=\"(?=.*\\d).{8,}\">\n                  \n                    <div *ngIf=\"confPass.invalid && (confPass.dirty || confPass.touched)\" \n                        class=\"alert alert-danger\">\n                        <div *ngIf=\"confPass.errors.pattern\">\n                          اعد كتابة كلمة المرور \n                        </div>\n                      <div *ngIf=\"confPass.errors.required\">\n                        يجب تأكيد كلمة المرور \n                      </div>\n                      \n                  </div>\n                </div>\n                <select style=\"color: black;\" class=\"fadeIn second\" \n                    name=\"city\" ngModel #city=\"ngModel\" >\n                  <option style=\"color: black;\" value=\"Location\">المدينة</option>\n                  <option style=\"color: black;\" value=\"المنصوره\">المنصورة</option>\n                  <option style=\"color: black;\" value=\"الجيزه\">الجيزة</option>\n              </select>\n                <input type=\"submit\" class=\"fadeIn fourth\" value=\"إنشاء مستخدم\">\n              </form>\n          \n            </div>\n          </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _be_osta_be_osta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./be-osta/be-osta.component */ "./src/app/be-osta/be-osta.component.ts");
/* harmony import */ var _conact_us_conact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conact-us/conact-us.component */ "./src/app/conact-us/conact-us.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _availablel_osta_availablel_osta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./availablel-osta/availablel-osta.component */ "./src/app/availablel-osta/availablel-osta.component.ts");
/* harmony import */ var _osta_profile_osta_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./osta-profile/osta-profile.component */ "./src/app/osta-profile/osta-profile.component.ts");











const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'beosta', component: _be_osta_be_osta_component__WEBPACK_IMPORTED_MODULE_6__["BeOstaComponent"] },
    { path: 'contactUs', component: _conact_us_conact_us_component__WEBPACK_IMPORTED_MODULE_7__["ConactUsComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"] },
    { path: 'availble/:selected', component: _availablel_osta_availablel_osta_component__WEBPACK_IMPORTED_MODULE_9__["AvailablelOstaComponent"] },
    { path: 'ostaProfile', component: _osta_profile_osta_profile_component__WEBPACK_IMPORTED_MODULE_10__["OstaProfileComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/customer */ "./src/app/services/customer.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.customer = new _services_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _conact_us_conact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conact-us/conact-us.component */ "./src/app/conact-us/conact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _be_osta_be_osta_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./be-osta/be-osta.component */ "./src/app/be-osta/be-osta.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _availablel_osta_availablel_osta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./availablel-osta/availablel-osta.component */ "./src/app/availablel-osta/availablel-osta.component.ts");
/* harmony import */ var _osta_profile_osta_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./osta-profile/osta-profile.component */ "./src/app/osta-profile/osta-profile.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
            _conact_us_conact_us_component__WEBPACK_IMPORTED_MODULE_8__["ConactUsComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _be_osta_be_osta_component__WEBPACK_IMPORTED_MODULE_13__["BeOstaComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
            _availablel_osta_availablel_osta_component__WEBPACK_IMPORTED_MODULE_15__["AvailablelOstaComponent"],
            _osta_profile_osta_profile_component__WEBPACK_IMPORTED_MODULE_16__["OstaProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/availablel-osta/availablel-osta.component.css":
/*!***************************************************************!*\
  !*** ./src/app/availablel-osta/availablel-osta.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YWlsYWJsZWwtb3N0YS9hdmFpbGFibGVsLW9zdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/availablel-osta/availablel-osta.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/availablel-osta/availablel-osta.component.ts ***!
  \**************************************************************/
/*! exports provided: AvailablelOstaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailablelOstaComponent", function() { return AvailablelOstaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");




let AvailablelOstaComponent = class AvailablelOstaComponent {
    constructor(rout, user) {
        this.rout = rout;
        this.user = user;
        this.arr = ["سباكه", "نجارة", "كهرباء", "أجهزة كهربائية", "تشطيبات وديكورات", "نقاشة", "ألوميتال", "حدادة", "مبلط", "تكييف وتبريد", "تركيب ستالايت وكاميرات"];
    }
    ngOnInit() {
        this.rout.paramMap
            .subscribe(params => {
            this.service = params.get('selected');
        });
        this.user.getCustomersList(this.service)
            .subscribe(result => {
            this.avialableOsta = result;
            console.log(result);
        }, errors => {
            console.log(errors);
        });
    }
};
AvailablelOstaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AvailablelOstaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-availablel-osta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./availablel-osta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/availablel-osta/availablel-osta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./availablel-osta.component.css */ "./src/app/availablel-osta/availablel-osta.component.css")).default]
    })
], AvailablelOstaComponent);



/***/ }),

/***/ "./src/app/be-osta/be-osta.component.css":
/*!***********************************************!*\
  !*** ./src/app/be-osta/be-osta.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlLW9zdGEvYmUtb3N0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/be-osta/be-osta.component.ts":
/*!**********************************************!*\
  !*** ./src/app/be-osta/be-osta.component.ts ***!
  \**********************************************/
/*! exports provided: BeOstaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeOstaComponent", function() { return BeOstaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/user */ "./src/app/modules/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let BeOstaComponent = class BeOstaComponent {
    constructor(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    submit(f) {
        this.osta = new _modules_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.osta.full_name = f.value.name;
        this.osta.phone_number = f.value.phone;
        this.osta.password = f.value.password;
        this.osta.available_now = true;
        this.osta.craft = f.value.servive;
        this.osta.user_type = true;
        this.osta.username = f.value.aboutServive;
        this.osta.available_today = true;
        this.userservice.createOsta(this.osta)
            .subscribe(data => {
            this.router.navigate(['/login']);
        }, error => {
            console.log(error);
        });
    }
};
BeOstaComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
BeOstaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-be-osta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./be-osta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/be-osta/be-osta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./be-osta.component.css */ "./src/app/be-osta/be-osta.component.css")).default]
    })
], BeOstaComponent);



/***/ }),

/***/ "./src/app/conact-us/conact-us.component.css":
/*!***************************************************!*\
  !*** ./src/app/conact-us/conact-us.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmFjdC11cy9jb25hY3QtdXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/conact-us/conact-us.component.ts":
/*!**************************************************!*\
  !*** ./src/app/conact-us/conact-us.component.ts ***!
  \**************************************************/
/*! exports provided: ConactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConactUsComponent", function() { return ConactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConactUsComponent = class ConactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conact-us/conact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conact-us.component.css */ "./src/app/conact-us/conact-us.component.css")).default]
    })
], ConactUsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    submit(f) {
        let phone = f.value.phone;
        let pass = f.value.password;
        this.user.getUser({ "username": phone, "password": pass }).subscribe(data => {
            if (data) {
                localStorage.setItem('user', data[0].username);
                if (data[0].user_type == false) {
                    localStorage.setItem('osta', 'true');
                }
                this.router.navigate(['']);
            }
        }, error => {
            console.log(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/user.ts":
/*!*********************************!*\
  !*** ./src/app/modules/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
}


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() {
    }
    ngOnInit() {
    }
    checkuser() {
        this.currentUser = localStorage.getItem('user');
        if (this.currentUser) {
            return true;
        }
        return false;
    }
    checkosta() {
        this.currentOsta = localStorage.getItem('osta');
        if (this.currentOsta) {
            return true;
        }
        return false;
    }
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('osta');
        this.currentUser = null;
        this.currentOsta = null;
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let OrderComponent = class OrderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    submit(f) {
        this.router.navigate([`/availble/${f.value.selected}`]);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/osta-profile/osta-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/osta-profile/osta-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29zdGEtcHJvZmlsZS9vc3RhLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/osta-profile/osta-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/osta-profile/osta-profile.component.ts ***!
  \********************************************************/
/*! exports provided: OstaProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OstaProfileComponent", function() { return OstaProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let OstaProfileComponent = class OstaProfileComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    submit(f) {
        let user = localStorage.getItem('user');
        console.log(user);
        this.user.chOsta({ "username": user }).subscribe(data => {
        }, error => {
            console.log(error);
        });
        this.router.navigate(['']);
    }
};
OstaProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OstaProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-osta-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./osta-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/osta-profile/osta-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./osta-profile.component.css */ "./src/app/osta-profile/osta-profile.component.css")).default]
    })
], OstaProfileComponent);



/***/ }),

/***/ "./src/app/services/customer.ts":
/*!**************************************!*\
  !*** ./src/app/services/customer.ts ***!
  \**************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Customer {
}


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://18.224.215.177:1337';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
    }
    getUser(obj) {
        return this.http.post(`${this.baseUrl}/customer/login`, obj);
    }
    chOsta(obj) {
        return this.http.post(`${this.baseUrl}/customer/change_availability`, obj);
    }
    createUser(user) {
        return this.http.post(`${this.baseUrl}/customer/signup_user`, user);
    }
    getCustomersList(id) {
        return this.http.get(`${this.baseUrl}/customer/list/${id}/`);
    }
    createOsta(osta) {
        return this.http.post(`${this.baseUrl}/customer/signup_osta`, osta);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/user */ "./src/app/modules/user.ts");





let SignupComponent = class SignupComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    submit(f) {
        this.user = new _modules_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.full_name = f.value.name;
        this.user.phone_number = f.value.phone;
        this.user.password = f.value.password;
        this.user.available_now = false;
        this.user.craft = f.value.servive;
        this.user.user_type = true;
        this.user.username = f.value.aboutServive;
        this.user.available_today = false;
        this.userService.createUser(this.user)
            .subscribe(data => {
            console.log(data);
            this.router.navigate(['/login']);
        }, error => console.log(error));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macintoshhd/Desktop/ostafandy2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/_helpers/filter.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/_helpers/filter.pipe.ts ***!
    \*****************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcApp_helpersFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //pipe decorator --> this allow us to give a pipe name


    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchStr) {
          if (!items) return [];
          if (!searchStr) return items;
          searchStr = searchStr.toLocaleLowerCase();
          return items.filter(function (data) {
            return data.title.toLocaleLowerCase().includes(searchStr);
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/_services/data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/data.service.ts ***!
    \*******************************************/

  /*! exports provided: DataService */

  /***/
  function srcApp_servicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(_http) {
        _classCallCheck(this, DataService);

        this._http = _http;
        this.topStoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend.topStoryBaseURL;
        this.itemUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend.itemBaseURL;
        this.beerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend.beerBaseUrl;
        this.jobUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backend.baseUrl + '/api/HackerNews';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }

      _createClass(DataService, [{
        key: "getArticleIds",
        value: function getArticleIds() {
          //this will return observable
          return this._http.get("".concat(this.topStoryUrl, ".json?print=pretty"));
        }
      }, {
        key: "getArticleDetail",
        value: function getArticleDetail(id) {
          return this._http.get("".concat(this.itemUrl, "/") + id + '.json');
        }
      }, {
        key: "getBeer",
        value: function getBeer() {
          return this._http.get(this.beerUrl);
        }
      }, {
        key: "getJobs",
        value: function getJobs() {
          return this._http.get(this.jobUrl, {
            headers: this.headers
          });
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _coding_coding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./coding/coding.component */
    "./src/app/coding/coding.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'coding',
      component: _coding_coding_component__WEBPACK_IMPORTED_MODULE_3__["CodingComponent"]
    } //// otherwise redirect to home
    //{ path: '**', redirectTo: '' }
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent( //private dataService: DataService
      router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'See Me Thru Here';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "custom-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", "routerLink", "/", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", "routerLink", "/coding", 1, "dropdown-item"], [1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SMTH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Hobby");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Learning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap\");\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 18px;\n}\nnav[_ngcontent-%COMP%] {\n  background: #285 !important;\n}\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: white !important;\n}\nnav[_ngcontent-%COMP%]   .custom-toggler.navbar-toggler[_ngcontent-%COMP%] {\n  border-color: #171a18;\n}\nnav[_ngcontent-%COMP%]   .custom-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(23, 26, 24, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white !important;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  background: #285 !important;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: #1d7448 !important;\n}\nnav[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-right: 15px !important;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwcmV0dFxcZ2l0aHViXFxTZWVtZTJIZXJlXFxBbmd1bGFyXFxwYXRBcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBS1I7RUFDSSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDSEo7QURLQTtFQUNFLDJCQUFBO0FDRkY7QURJRTtFQUNFLHVCQUFBO0FDRko7QURLRTtFQUNFLHFCQUFBO0FDSEo7QURNRTtFQUNFLHdRQUFBO0FDSko7QURRSTtFQUNFLHVCQUFBO0FDTk47QURTSTtFQUNFLDJCQUFBO0FDUE47QURTTTtFQUNFLDhCQUFBO0FDUFI7QURZRTtFQUNFLDZCQUFBO0FDVko7QURlQTtFQUNFLGtCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuJG5hdmJhcmNvbG9yOiAjMjg1O1xyXG4kdGV4dG5hdmJhcmNvbG9yOiB3aGl0ZTtcclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6J051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxubmF2IHtcclxuICBiYWNrZ3JvdW5kOiAkbmF2YmFyY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogJHRleHRuYXZiYXJjb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS10b2dnbGVyLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzLCAyNiwgMjQpO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS10b2dnbGVyIC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDIzLCAyNiwgMjQsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkgYSB7XHJcbiAgICAgIGNvbG9yOiAkdGV4dG5hdmJhcmNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkbmF2YmFyY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJG5hdmJhcmNvbG9yLCA1JSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQ6ICMyODUgIWltcG9ydGFudDtcbn1cbm5hdiAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5uYXYgLmN1c3RvbS10b2dnbGVyLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTcxYTE4O1xufVxubmF2IC5jdXN0b20tdG9nZ2xlciAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDIzLCAyNiwgMjQsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxubmF2IHVsIGxpIGEge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbm5hdiB1bCAuZHJvcGRvd24tbWVudSB7XG4gIGJhY2tncm91bmQ6ICMyODUgIWltcG9ydGFudDtcbn1cbm5hdiB1bCAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxZDc0NDggIWltcG9ydGFudDtcbn1cbm5hdiAucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _coding_coding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./coding/coding.component */
    "./src/app/coding/coding.component.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_services/data.service */
    "./src/app/_services/data.service.ts");
    /* harmony import */


    var _helpers_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_helpers/filter.pipe */
    "./src/app/_helpers/filter.pipe.ts"); //required for ngModel to work
    //Services
    //Helpers


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _helpers_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _coding_coding_component__WEBPACK_IMPORTED_MODULE_7__["CodingComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _helpers_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _coding_coding_component__WEBPACK_IMPORTED_MODULE_7__["CodingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coding/coding.component.ts":
  /*!********************************************!*\
    !*** ./src/app/coding/coding.component.ts ***!
    \********************************************/

  /*! exports provided: CodingComponent */

  /***/
  function srcAppCodingCodingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodingComponent", function () {
      return CodingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_services/data.service */
    "./src/app/_services/data.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _helpers_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_helpers/filter.pipe */
    "./src/app/_helpers/filter.pipe.ts");

    function CodingComponent_li_24_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", article_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r7.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" By ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, article_r7.by), " ", article_r7.time, " ");
      }
    }

    function CodingComponent_li_24_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", article_r7.title, " By ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, article_r7.by), " ", article_r7.time, " ");
      }
    }

    function CodingComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodingComponent_li_24_ng_template_1_Template, 5, 6, "ng-template", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CodingComponent_li_24_ng_template_2_Template, 3, 5, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var article_r7 = ctx.$implicit;

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", article_r7.url)("ngIfElse", _r9);
      }
    }

    function CodingComponent_ul_27_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "site");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var brew_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brew_r14.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brew_r14.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", brew_r14.website_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CodingComponent_ul_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodingComponent_ul_27_li_1_Template, 7, 3, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.brews);
      }
    }

    function CodingComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The click counter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IS greater");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " than 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CodingComponent_ng_template_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The click counter ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IS NOT greater");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " than 4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CodingComponent_p_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "em");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CodingComponent_table_49_tr_8_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", job_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r16.by);
      }
    }

    function CodingComponent_table_49_tr_8_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r16.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r16.by);
      }
    }

    function CodingComponent_table_49_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CodingComponent_table_49_tr_8_ng_template_1_Template, 5, 3, "ng-template", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CodingComponent_table_49_tr_8_ng_template_2_Template, 4, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var job_r16 = ctx.$implicit;

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", job_r16.url)("ngIfElse", _r18);
      }
    }

    function CodingComponent_table_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "By");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CodingComponent_table_49_tr_8_Template, 4, 2, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.jobs);
      }
    }

    var CACHE_KEY = 'hackerNewsTopStory';
    var EXPIRY_KEY = 'expiryDateTime';

    var CodingComponent = /*#__PURE__*/function () {
      function CodingComponent(_data) {
        _classCallCheck(this, CodingComponent);

        this._data = _data;
        this.articlesIds = [];
        this.articles = [];
        this._articlesLocal = [];
        this.newsCount = 100;
        this.jobs = [];
        this.clickCounter = 0;
        this.name = '';
        this.searchModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CodingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._data.getBeer().subscribe(function (data) {
            _this.brews = data; //console.log(this.brews);
          });

          this._data.getJobs().subscribe(function (data) {
            _this.jobs = data; //console.log(this.jobs);
          });

          var isExpired = this.isDateTimeExpired(EXPIRY_KEY); //console.log(value);

          if (isExpired === null || isExpired == true) {
            //if it expired, call api
            localStorage.removeItem(CACHE_KEY);
            localStorage.removeItem(EXPIRY_KEY); //get a new top stories and set a new expire date

            this.getTopStories();
            this.setExpiryDateTime(EXPIRY_KEY, CACHE_KEY, 900000); //15 min
          } else {
            //if the date is not expired, use localStorage
            this._articlesLocal = JSON.parse(localStorage[CACHE_KEY]) || "[]";
          }
        } //get top stories

      }, {
        key: "getTopStories",
        value: function getTopStories() {
          var _this2 = this;

          this._data.getArticleIds().subscribe(function (res) {
            _this2.articlesIds = res;

            var item = _this2.articlesIds.slice(Math.max(_this2.articlesIds.length - _this2.newsCount, 0)).map(function (i) {
              _this2._data.getArticleDetail(i).subscribe(function (res) {
                _this2.article = res;

                _this2.articles.push(_this2.article);

                _this2._articlesLocal.push(_this2.article);

                localStorage[CACHE_KEY] = JSON.stringify(_this2._articlesLocal);
              });
            });
          });
        } //search box

      }, {
        key: "updateSearchStr",
        value: function updateSearchStr(value) {
          this.searchStr = value;
          this.searchModelChange.emit(this.searchStr);
        } //crash course

      }, {
        key: "counterClick",
        value: function counterClick() {
          this.clickCounter += 1;
        } //class in saass

      }, {
        key: "setClasses",
        value: function setClasses() {
          var myClasses = {
            normal: this.clickCounter > 4,
            notNormal: this.clickCounter <= 4
          };
          return myClasses;
        } //set expiry Time
        //timeToLive will be in milliseconds

      }, {
        key: "setExpiryDateTime",
        value: function setExpiryDateTime(key, value, timeToLive) {
          var now = new Date();
          var item = {
            value: value,
            expiry: now.getTime() + timeToLive
          };
          localStorage.setItem(key, JSON.stringify(item));
        }
      }, {
        key: "isDateTimeExpired",
        value: function isDateTimeExpired(key) {
          var itemStr = localStorage.getItem(key); //if time doesn't exist, return null

          if (!itemStr) {
            return null;
          }

          var item = JSON.parse(itemStr);
          var now = new Date(); //compare the expiry time of the item with the current time

          var result = now.getTime() > item.expiry ? true : false;
          return result;
        }
      }]);

      return CodingComponent;
    }();

    CodingComponent.ɵfac = function CodingComponent_Factory(t) {
      return new (t || CodingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CodingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CodingComponent,
      selectors: [["app-coding"]],
      inputs: {
        searchStr: "searchStr"
      },
      outputs: {
        searchModelChange: "searchModelChange"
      },
      decls: 50,
      vars: 15,
      consts: [[2, "padding-top", "2em"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "hackerapi-tab", "data-toggle", "tab", "href", "#hackerapi", "role", "tab", "aria-controls", "hackerapi", "aria-selected", "true", 1, "nav-link", "active"], ["id", "breweries-tab", "data-toggle", "tab", "href", "#breweries", "role", "tab", "aria-controls", "breweries", "aria-selected", "false", 1, "nav-link"], ["id", "crashcourse-tab", "data-toggle", "tab", "href", "#crashcourse", "role", "tab", "aria-controls", "crashcourse", "aria-selected", "false", 1, "nav-link"], ["id", "jobnews-tab", "data-toggle", "tab", "href", "#jobnews", "role", "tab", "aria-controls", "jobnews", "aria-selected", "false", 1, "nav-link"], [1, "tab-content"], ["id", "hackerapi", "role", "tabpanel", "aria-labelledby", "hackerapi-tab", 1, "tab-pane", "active"], [1, "row", "row", "justify-content-between"], [2, "text-align", "center"], [1, "row", "search"], ["type", "search", "placeholder", "Search By Title", "aria-label", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "hackerNews"], [4, "ngFor", "ngForOf"], ["id", "breweries", "role", "tabpanel", "aria-labelledby", "breweries-tab", 1, "tab-pane"], ["class", "brews", 4, "ngIf"], ["id", "crashcourse", "role", "tabpanel", "aria-labelledby", "crashcourse-tab", 1, "tab-pane"], [1, "play-container"], [3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "play-container", 3, "ngClass"], [3, "ngIf", "ngIfElse"], ["none", ""], ["id", "jobnews", "role", "tabpanel", "aria-labelledby", "jobnews-tab", 1, "tab-pane"], [4, "ngIf"], ["class", "table table-striped", "aria-labelledby", "tableLabel", 4, "ngIf"], ["target", "_blank", 1, "article-link", 3, "href"], [1, "brews"], [1, "name"], [1, "country"], ["target", "_blank", 1, "site", 3, "href"], ["aria-labelledby", "tableLabel", 1, "table", "table-striped"], ["target", "_blank", 3, "href"]],
      template: function CodingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Angular 8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hacker News API");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Breweries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Crash Course");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Jobs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CodingComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.searchStr = $event;
          })("ngModelChange", function CodingComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.updateSearchStr($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CodingComponent_li_24_Template, 4, 2, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CodingComponent_ul_27_Template, 2, 1, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "You've clicked ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodingComponent_Template_span_click_32_listener() {
            return ctx.counterClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "this");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CodingComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "You said: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CodingComponent_ng_template_42_Template, 5, 0, "ng-template", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, CodingComponent_ng_template_43_Template, 5, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "This component demonstrates fetching data from the server.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CodingComponent_p_48_Template, 3, 0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CodingComponent_table_49_Template, 9, 1, "table", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top ", ctx.newsCount, " Hacker News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 12, ctx._articlesLocal, ctx.searchStr));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.brews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.clickCounter, " times");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickCounter > 4)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jobs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobs);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      pipes: [_helpers_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
      styles: [".tab-pane[_ngcontent-%COMP%] {\n  padding-top: 1.5em;\n}\n\nul.brews[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nul.brews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #eeeeee;\n  padding: 1em;\n  margin-right: 10px;\n  width: 20%;\n  height: 200px;\n  margin-bottom: 1em;\n  display: flex;\n  flex-direction: column;\n}\n\nul.brews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nul.brews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p.name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\nul.brews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p.country[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  flex-grow: 1;\n}\n\nul.hackerNews[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n}\n\nul.hackerNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 23px;\n  border-bottom: 1px solid lightgray;\n  padding: 5px 0px 5px 0px;\n}\n\nul.hackerNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #228855 !important;\n}\n\nul.hackerNews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: lightgray;\n  padding: 0.3em 0.8em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.play-container[_ngcontent-%COMP%] {\n  padding: 3em;\n  border: 1px solid lightgray;\n  margin-bottom: 1em;\n}\n\n.play-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-bottom: 2em;\n}\n\n.normal[_ngcontent-%COMP%] {\n  background-color: yellow;\n  border: 4px solid black;\n}\n\n.notNormal[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kaW5nL0M6XFxVc2Vyc1xccHJldHRcXGdpdGh1YlxcU2VlbWUySGVyZVxcQW5ndWxhclxccGF0QXBwL3NyY1xcYXBwXFxjb2RpbmdcXGNvZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29kaW5nL2NvZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNGRjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBRElJO0VBQ0UsU0FBQTtBQ0ZOOztBREtJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0hOOztBRE1JO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNKTjs7QURTQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtBQ05GOztBRFFFO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7QUNOSjs7QURRSTtFQUNFLHlCQUFBO0FDTk47O0FEUU07RUFDRSxZQUFBO0FDTlI7O0FEWUE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNURjs7QURZQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEV0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZQTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7QUNURjs7QURZQTtFQUNFLDJCQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9jb2RpbmcvY29kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiRoYWNrZXJOZXdmb250OiAjMjI4ODU1O1xyXG5cclxuLnRhYi1wYW5lIHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVlbTtcclxufVxyXG5cclxudWwuYnJld3Mge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbGkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHAubmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwLmNvdW50cnkge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG51bC5oYWNrZXJOZXdzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogJGhhY2tlck5ld2ZvbnQgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGhhY2tlck5ld2ZvbnQsIDUwJSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nOiAuM2VtIC44ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGxheS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDNlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgfVxyXG59XHJcbi5ub3JtYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5vdE5vcm1hbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnRhYi1wYW5lIHtcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xufVxuXG51bC5icmV3cyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG51bC5icmV3cyBsaSB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG51bC5icmV3cyBsaSBwIHtcbiAgbWFyZ2luOiAwO1xufVxudWwuYnJld3MgbGkgcC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxudWwuYnJld3MgbGkgcC5jb3VudHJ5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxudWwuaGFja2VyTmV3cyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxudWwuaGFja2VyTmV3cyBsaSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xufVxudWwuaGFja2VyTmV3cyBsaSBhIHtcbiAgY29sb3I6ICMyMjg4NTUgIWltcG9ydGFudDtcbn1cbnVsLmhhY2tlck5ld3MgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ucGxheS1jb250YWluZXIge1xuICBwYWRkaW5nOiAzZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLnBsYXktY29udGFpbmVyIGlucHV0IHtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5ub3JtYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubm90Tm9ybWFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"]
    });
    CodingComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CodingComponent,
      factory: CodingComponent.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coding',
          templateUrl: './coding.component.html',
          styleUrls: ['./coding.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        searchStr: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchModelChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //import { User } from '@app/_models';


    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.loading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 0,
      consts: [[1, "jumbotron"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome !");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " HOME\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: lightgray;\n  padding: 0.3em 0.8em;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.play-container[_ngcontent-%COMP%] {\n  padding: 3em;\n  border: 1px solid lightgray;\n  margin-bottom: 1em;\n}\n\n.play-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-bottom: 2em;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: yellow;\n  border: 4px solid black;\n}\n\n.notActive[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHByZXR0XFxnaXRodWJcXFNlZW1lMkhlcmVcXEFuZ3VsYXJcXHBhdEFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FER0E7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDSSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIHBhZGRpbmc6IC4zZW0gLjhlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGxheS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5ub3RBY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiIsInNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBwYWRkaW5nOiAwLjNlbSAwLjhlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBsYXktY29udGFpbmVyIHtcbiAgcGFkZGluZzogM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5wbGF5LWNvbnRhaW5lciBpbnB1dCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbn1cblxuLm5vdEFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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

    var environment = {
      production: false,
      backend: {
        topStoryBaseURL: "https://hacker-news.firebaseio.com/v0/topstories",
        itemBaseURL: "https://hacker-news.firebaseio.com/v0/item",
        beerBaseUrl: "https://api.openbrewerydb.org/breweries",
        baseUrl: "https://localhost:44300"
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\prett\github\Seeme2Here\Angular\patApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
webpackJsonp([2],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/item-edit/item-edit.module": [
		570,
		1
	],
	"../pages/items/items.module": [
		571,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 182;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvVariables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var EnvVariables = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* InjectionToken */]("env.variables");
//# sourceMappingURL=environment.token.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goItemsPage = function () {
        this.navCtrl.push('items');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/home/home.html"*/'<!--\n@Author: Nicolas Fazio <webmaster-fazio>\n@Date:   08-04-2017\n@Email:  contact@nicolasfazio.ch\n@Last modified by:   webmaster-fazio\n@Last modified time: 09-04-2017\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic DevOps Cours - Front</h3>\n\n  <p>\n    Simple MEAN Stack starter kit with TypeScript.\n  </p>\n  <ul>\n    <li>Using Front-End & Back-End in same project folder.</li>\n    <li>Adding Test Unit</li>\n    <li>Using Native Plugin and debug in browser</li>\n    <li>Work with environement variable</li>\n    <li>Deploy BDD on MongoLab</li>\n    <li>Deploy Server on Heroku</li>\n    <li>Deploy Front-end to test in device</li>\n    <li>Deploy Front-End PWA on Github</li>\n    <li>Publish IOS app in Apple Store</li>\n  </ul>\n\n\n  <div text-center>\n    <button\n      ion-button\n      (click)="goItemsPage()"\n      id="goItemsPage">go Items Page\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TODOS_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_environments_environment_token__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var TODOS_URL = '/todos';
var TodosService = (function () {
    function TodosService(http, envVariables) {
        this.http = http;
        this.envVariables = envVariables;
        this._dataStore = { todos: [] };
        this._todos = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.todos = this._todos.asObservable();
    }
    TodosService.prototype.loadAll = function () {
        var _this = this;
        this.http.get("" + this.envVariables.apiEndpoint + TODOS_URL)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this._dataStore.todos = data;
            _this._todos.next(Object.assign({}, _this._dataStore).todos);
        }, function (error) { return _this.handleError("" + ((error.statusText) ? error.statusText + ' Could not load todos.' : 'Could not load todos.')); });
    };
    TodosService.prototype.load = function (id) {
        var _this = this;
        this.http.get("" + this.envVariables.apiEndpoint + TODOS_URL + "/" + id)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            var notFound = true;
            _this._dataStore.todos.forEach(function (item, index) {
                if (item._id === data.id) {
                    _this._dataStore.todos[index] = data;
                    notFound = false;
                }
            });
            if (notFound) {
                _this._dataStore.todos.push(data);
            }
            _this._todos.next(Object.assign({}, _this._dataStore).todos);
        }, function (error) { return _this.handleError("" + ((error.statusText) ? error.statusText + ' Could not load todo.' : 'Could not load todo.')); });
    };
    TodosService.prototype.create = function (todo) {
        var _this = this;
        var body = JSON.stringify({ description: todo });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.http.post("" + this.envVariables.apiEndpoint + TODOS_URL, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this._dataStore.todos.push(data);
            _this._todos.next(Object.assign({}, _this._dataStore).todos);
        }, function (error) { return _this.handleError("" + ((error.statusText) ? error.statusText + ' Could not create todo.' : 'Could not create todo.')); });
    };
    TodosService.prototype.update = function (todo) {
        var _this = this;
        var url = "" + this.envVariables.apiEndpoint + TODOS_URL + "/" + todo._id;
        var body = JSON.stringify(todo);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return new Promise(function (resolve, reject) {
            _this.http.put(url, body, { headers: headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this._dataStore.todos.forEach(function (t, i) {
                    if (t._id === data.response._id) {
                        _this._dataStore.todos[i] = data.response;
                    }
                });
                _this._todos.next(Object.assign({}, _this._dataStore).todos);
                resolve(data.response);
            }, function (error) {
                var msg = "" + ((error.statusText) ? error.statusText + ' Could not update todo' : 'Could not update todo');
                _this.handleError(msg);
                reject(msg);
            });
        });
    };
    TodosService.prototype.delete = function (todoId) {
        var _this = this;
        var url = "" + this.envVariables.apiEndpoint + TODOS_URL + "/" + todoId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.http.delete(url, headers)
            .subscribe(function (response) {
            _this._dataStore.todos.forEach(function (t, i) {
                if (t._id === todoId) {
                    _this._dataStore.todos.splice(i, 1);
                }
            });
            _this._todos.next(Object.assign({}, _this._dataStore).todos);
        }, function (error) { return _this.handleError("" + ((error.statusText) ? error.statusText + ' Could not delete todo.' : 'Could not delete todo.')); });
    };
    TodosService.prototype.handleError = function (error) {
        console.error(error || 'Server error');
        alert(error || 'Server error');
    };
    return TodosService;
}());
TodosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_environments_environment_token__["a" /* EnvVariables */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], Object])
], TodosService);

//# sourceMappingURL=todos-service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_todos_service_todos_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment_module__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__environments_environment_module__["a" /* EnvironmentsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/item-edit/item-edit.module#ItemEditModule', name: 'item-edit', segment: 'items/:id', priority: 'low', defaultHistory: ['items'] },
                    { loadChildren: '../pages/items/items.module#ItemsModule', name: 'items', segment: 'items', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_todos_service_todos_service__["a" /* TodosService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export environmentFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_token__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_development__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_production__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




function environmentFactory() {
    console.log('in environmentFactory ', process.env);
    var env =  true ? __WEBPACK_IMPORTED_MODULE_3__environments_production__["a" /* prodVariables */] : devVariables;
    if (false)
        console.log('env->', env);
    return env;
}
var EnvironmentsModule = (function () {
    function EnvironmentsModule() {
    }
    return EnvironmentsModule;
}());
EnvironmentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__environment_token__["a" /* EnvVariables */],
                useFactory: environmentFactory
            }
        ]
    })
], EnvironmentsModule);

//# sourceMappingURL=environment.module.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(200)))

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export devVariables */
var devVariables = {
    environmentName: 'Development Environment',
    ionicEnvName: 'dev',
    apiEndpoint: 'http://localhost:8080',
    dbHost: 'mongodb://localhost:27017',
    dbName: 'test'
};
//# sourceMappingURL=development.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prodVariables; });
var prodVariables = {
    environmentName: 'Production Environment',
    ionicEnvName: 'prod',
    apiEndpoint: 'https://devops-tma.herokuapp.com',
    dbHost: 'mongodb://devopsuser:devopsuserpwd@ds161042.mlab.com:61042',
    dbName: 'devops'
};
//# sourceMappingURL=production.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.js.map
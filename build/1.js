webpackJsonp([1],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditModule", function() { return ItemEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_edit__ = __webpack_require__(574);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemEditModule = (function () {
    function ItemEditModule() {
    }
    return ItemEditModule;
}());
ItemEditModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */]
        ]
    })
], ItemEditModule);

//# sourceMappingURL=item-edit.module.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEdit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemEdit = (function () {
    function ItemEdit(navCtrl, navParams, fb, todoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.todoService = todoService;
        this.todo = this.navParams.get('todo');
        if (this.todo) {
            this.todoDate = new Date(+this.todo.deadline).toISOString();
            this.form = fb.group({
                description: [this.todo.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)],
                isComplete: [this.todo.isComplete, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                deadline: [this.todoDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                expire: [this.todo.expire, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
        }
        else {
            this.form = fb.group({
                description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)],
                isComplete: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                deadline: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                expire: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            });
            console.log('kick user');
            this.navCtrl.setRoot('items');
        }
    }
    ItemEdit.prototype.saveTodo = function () {
        var _this = this;
        var newTodo = this.form.value;
        var newDate = new Date(newTodo.deadline).getTime();
        newTodo._id = this.todo._id;
        newTodo.deadline = newDate;
        this.todoService.update(newTodo)
            .then(function (res) {
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ItemEdit.prototype.deleteTodo = function () {
        this.todoService.delete(this.todo._id);
        this.navCtrl.pop();
    };
    ItemEdit.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    ItemEdit.prototype.toogleClick = function () {
        console.log(this.form.value.expire);
    };
    return ItemEdit;
}());
ItemEdit = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'item-edit',
        segment: 'items/:id',
        defaultHistory: ['items']
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-edit',template:/*ion-inline-start:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/item-edit/item-edit.html"*/'<!--\n@Author: Nicolas Fazio <webmaster-fazio>\n@Date:   08-04-2017\n@Email:  contact@nicolasfazio.ch\n@Last modified by:   webmaster-fazio\n@Last modified time: 08-04-2017\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit todo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!--\n  Generated template for the ItemEdit page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n    <h2>Description</h2>\n    <form [formGroup]="form">\n        <ion-textarea formControlName="description" value="{{todo?.description}}"></ion-textarea>\n        <ion-item>\n          <small>Deadline: </small>\n          <ion-datetime formControlName="deadline" displayFormat="HH:mm - DD/MM/YY" pickerFormat="HH:mm DD MMM YY" [(ngModel)]="todoDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Expired:</ion-label>\n          <ion-toggle formControlName="expire" (ionChange)="toogleClick()" checked="{{todo?.expire}}"></ion-toggle>\n        </ion-item>\n\n        <p>\n          <small>Status: {{ todo?.isComplete ? "Complete" : "Incomplete" }}</small>\n        </p>\n\n      <ion-row>\n        <ion-col width-40>\n          <button ion-button block (click)="saveTodo()">\n            Save\n          </button>\n        </ion-col>\n        <ion-col width-40>\n          <button ion-button color="light" block (click)="cancel()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col width-20>\n          <button ion-button color="danger" block (click)="deleteTodo()">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/item-edit/item-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__["a" /* TodosService */]])
], ItemEdit);

//# sourceMappingURL=item-edit.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
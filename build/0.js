webpackJsonp([0],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_deadline_pipe__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sortdesc_pipe__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_dateformat_pipe__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notification_service_notification_service__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ItemsModule = (function () {
    function ItemsModule() {
    }
    return ItemsModule;
}());
ItemsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_deadline_pipe__["a" /* DeadlinePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_sortdesc_pipe__["a" /* SortDescPipe */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_dateformat_pipe__["a" /* DateFormatPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_7__providers_notification_service_notification_service__["a" /* NotificationService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */]
        ]
    })
], ItemsModule);

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationService = (function () {
    function NotificationService(platform, localNotifications, alertCtrl) {
        this.platform = platform;
        this.localNotifications = localNotifications;
        this.alertCtrl = alertCtrl;
    }
    NotificationService.prototype.schedule = function (notif) {
        var _this = this;
        this.platform.ready().then(function () {
            console.log(_this.platform);
            if (_this.platform.is('core')) {
                var alert_1 = _this.alertCtrl.create({
                    title: notif.title,
                    subTitle: notif.text,
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
            else {
                _this.localNotifications.schedule(notif);
            }
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__["a" /* LocalNotifications */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], NotificationService);

//# sourceMappingURL=notification-service.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalNotifications; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(128);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from '@ionic-native/local-notifications';
 *
 *
 * constructor(private localNotifications: LocalNotifications) { }
 *
 * ...
 *
 *
 * // Schedule a single notification
 * this.localNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * this.localNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * this.localNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
var LocalNotifications = (function (_super) {
    __extends(LocalNotifications, _super);
    function LocalNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    LocalNotifications.prototype.schedule = function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    LocalNotifications.prototype.update = function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    LocalNotifications.prototype.clear = function (notificationId) { return; };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    LocalNotifications.prototype.clearAll = function () { return; };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    LocalNotifications.prototype.cancel = function (notificationId) { return; };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    LocalNotifications.prototype.cancelAll = function () { return; };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isPresent = function (notificationId) { return; };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isScheduled = function (notificationId) { return; };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isTriggered = function (notificationId) { return; };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.prototype.getAllIds = function () { return; };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.prototype.getTriggeredIds = function () { return; };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    LocalNotifications.prototype.getScheduledIds = function () { return; };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.get = function (notificationId) { return; };
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.getScheduled = function (notificationId) { return; };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.getTriggered = function (notificationId) { return; };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAll = function () { return; };
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAllScheduled = function () { return; };
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAllTriggered = function () { return; };
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.registerPermission = function () { return; };
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.hasPermission = function () { return; };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotifications.prototype.on = function (eventName, callback) { };
    return LocalNotifications;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));
LocalNotifications.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
LocalNotifications.ctorParameters = function () { return []; };
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalNotifications.prototype, "schedule", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LocalNotifications.prototype, "update", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "clear", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 0,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "clearAll", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "cancel", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        successIndex: 0,
        errorIndex: 2
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "cancelAll", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "isPresent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "isScheduled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "isTriggered", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getAllIds", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getTriggeredIds", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getScheduledIds", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "get", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getScheduled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getTriggered", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getAll", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getAllScheduled", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "getAllTriggered", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "registerPermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocalNotifications.prototype, "hasPermission", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LocalNotifications.prototype, "on", null);
LocalNotifications = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
        pluginName: 'LocalNotifications',
        plugin: 'de.appplant.cordova.plugin.local-notification',
        pluginRef: 'cordova.plugins.notification.local',
        repo: 'https://github.com/katzer/cordova-plugin-local-notifications',
        platforms: ['Android', 'iOS', 'Windows']
    })
], LocalNotifications);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_service_notification_service__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Items = (function () {
    function Items(navCtrl, todoService, notificationService) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.notificationService = notificationService;
        this.todos = this.todoService.todos;
        this.todoService.loadAll();
        this.watchDeadline();
    }
    Items.prototype.ionViewWillUnload = function () {
        if (this._timerSubscribe)
            this._timerSubscribe.unsubscribe();
    };
    Items.prototype.addTodo = function (todoInput) {
        this.todoService.create(todoInput.value);
        this.clearInput(todoInput);
    };
    Items.prototype.toggleComplete = function (todo) {
        todo.isComplete = !todo.isComplete;
        this.todoService.update(todo);
    };
    Items.prototype.deleteTodo = function (todo) {
        this.todoService.delete(todo._id);
    };
    Items.prototype.navToEdit = function (todo) {
        console.log(todo);
        this.navCtrl.push('item-edit', {
            id: todo._id,
            todo: todo
        });
    };
    Items.prototype.clearInput = function (todoInput) {
        todoInput.value = '';
    };
    Items.prototype.watchDeadline = function () {
        var _this = this;
        var todoWatcher = [];
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(2000, 1000);
        this._timerSubscribe = timer.subscribe(function (t) {
            _this.todos.forEach(function (todos) {
                todoWatcher = todos.slice();
            });
            todoWatcher.map(function (todo) {
                if ((todo.deadline <= Date.now()) && (todo.expire != true)) {
                    return _this.isDeadline(t, todo);
                }
            });
        });
    };
    Items.prototype.isDeadline = function (t, todo) {
        console.info('isDeadline-> ', todo);
        todo.expire = true;
        this.todoService.update(todo);
        this.notificationService.schedule({ id: 1, title: 'Todo expired', text: "Expired: " + todo.description, data: { secret: 'secret but visible sentence' } });
    };
    return Items;
}());
Items = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'items',
        segment: 'items'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-items',template:/*ion-inline-start:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/items/items.html"*/'<!--\n@Author: Nicolas Fazio <webmaster-fazio>\n@Date:   08-04-2017\n@Email:  contact@nicolasfazio.ch\n@Last modified by:   webmaster-fazio\n@Last modified time: 08-04-2017\n-->\n\n<!--\n  Generated template for the Items page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Items</ion-title>\n  </ion-navbar>\n  <div id="addTodo" color="primary">\n    <ion-item no-lines color="primary">\n      <ion-input\n        #newTodo\n        (keyup.enter)="addTodo(newTodo)"\n        type="text"\n        placeholder="Add a new todo..." ></ion-input>\n      <button\n        ion-button\n        id="clearInput"\n        color="primary"\n        clear\n        large\n        item-right\n        (click)="clearInput(newTodo)"><ion-icon name="close"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n\n      <ion-item-sliding #slidingItem *ngFor="let todo of (todos | async | sortBy:\'deadline\'); let i = index;">\n\n        <ion-item>\n            <ion-label>{{ todo.description }}</ion-label>\n            <ion-checkbox (click)="toggleComplete(todo)" [checked]="todo.isComplete"></ion-checkbox>\n            <ion-badge\n              color="{{todo.deadline | deadline }}"\n              item-right>{{ todo.deadline | dateFormat }}\n            </ion-badge>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="navToEdit(todo); slidingItem.close()"><ion-icon name="create"></ion-icon></button>\n          <button ion-button color="danger" (click)="deleteTodo(todo)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/info/Desktop/mayor/module3/devops/ionic-final/src/pages/items/items.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__["a" /* TodosService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_notification_service_notification_service__["a" /* NotificationService */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeadlinePipe = (function () {
    function DeadlinePipe() {
    }
    DeadlinePipe.prototype.transform = function (deadline) {
        if (+deadline <= this.addDays(3) && +deadline > Date.now()) {
            return 'warning';
        }
        if (+deadline <= Date.now()) {
            return 'danger';
        }
        return 'primary';
    };
    DeadlinePipe.prototype.addDays = function (days) {
        var result = new Date();
        result.setDate(result.getDate() + days);
        return result.getTime();
    };
    return DeadlinePipe;
}());
DeadlinePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'deadline',
    })
], DeadlinePipe);

//# sourceMappingURL=deadline-pipe.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortDescPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortDescPipe = (function () {
    function SortDescPipe() {
    }
    SortDescPipe.prototype.transform = function (value, property, order) {
        if (property === void 0) { property = "name"; }
        if (order === void 0) { order = 'asc'; }
        if (order === 'desc') {
            return value.sort(function (a, b) {
                if (b[property] < a[property])
                    return -1;
                if (b[property] > a[property])
                    return 1;
                return 0;
            });
        }
        else {
            return value.sort(function (a, b) {
                if (b[property] > a[property])
                    return -1;
                if (b[property] < a[property])
                    return 1;
                return 0;
            });
        }
    };
    return SortDescPipe;
}());
SortDescPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'sortBy',
        pure: false
    })
], SortDescPipe);

//# sourceMappingURL=sortdesc-pipe.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value, args) {
        var date = new Date(+value);
        var year = date.getFullYear() + '';
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + '/' + month + '/' + year;
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'dateFormat',
    })
], DateFormatPipe);

//# sourceMappingURL=dateformat-pipe.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
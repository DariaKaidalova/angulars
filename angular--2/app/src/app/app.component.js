"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var frameworks_1 = require('./frameworks');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Frameworks';
        this.frameworks = [
            new frameworks_1.Framework(1, 'Angular 1'),
            new frameworks_1.Framework(2, 'Angular 2'),
            new frameworks_1.Framework(3, 'React'),
            new frameworks_1.Framework(4, 'Vou')
        ];
    }
    AppComponent.prototype.addFramework = function (newFramework) {
        if (newFramework) {
            console.log(this.frameworks.length);
            this.frameworks.push(this.frameworks.length, new frameworks_1.Framework(newFramework));
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <div #newFramework>\n      <input (keyup.enter)=\"addFramework(newFramework.value)\"\n      (blur)=\"addFramework(newFramework.value); newFramework.value=''\">\n      <button (click)=\"addFramework(newFramework.value)\">Add</button>\n    </div>\n    <ul>\n       <li *ngFor=\"let framework of frameworks\"> {{framework.name}} </li>\n     </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
var exercises_yoga_1 = require('./exercises.yoga');
var YogaExercisesFormComponent = (function () {
    function YogaExercisesFormComponent() {
        this.model = new exercises_yoga_1.exerciseYoga(0, 'Баддха Конасана', 'test', 'test');
        this.submitted = false;
    }
    YogaExercisesFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(YogaExercisesFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    YogaExercisesFormComponent = __decorate([
        core_1.Component({
            selector: 'yoga-form',
            //templateUrl: './yoga.exercises-form.component.html'
            template: "\n        <div class=\"container\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"name\" required>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"name\">Description</label>\n                    <textarea class=\"form-control\" id=\"description\" required></textarea>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"alterEgo\">Link</label>\n                    <input type=\"text\" class=\"form-control\" id=\"link\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-success\">Add</button>\n            </form>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], YogaExercisesFormComponent);
    return YogaExercisesFormComponent;
}());
exports.YogaExercisesFormComponent = YogaExercisesFormComponent;
//# sourceMappingURL=exercises.yoga-form.component.js.map
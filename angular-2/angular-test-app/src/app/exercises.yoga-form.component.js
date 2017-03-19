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
        this.model = new exercises_yoga_1.exerciseYoga(0, 'Баддха Конасана', 'test', 'http://yogasecrets.ru/praktika/asany-yogi/baddha-konasana');
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
            selector: 'yoga-exercises-form',
            templateUrl: './yoga.exercises-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], YogaExercisesFormComponent);
    return YogaExercisesFormComponent;
}());
exports.YogaExercisesFormComponent = YogaExercisesFormComponent;
//# sourceMappingURL=exercises.yoga-form.component.js.map
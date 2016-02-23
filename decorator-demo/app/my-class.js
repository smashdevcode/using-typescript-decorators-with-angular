System.register(['./log-decorator'], function(exports_1) {
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
    var log_decorator_1;
    var MyClass;
    return {
        setters:[
            function (log_decorator_1_1) {
                log_decorator_1 = log_decorator_1_1;
            }],
        execute: function() {
            MyClass = (function () {
                function MyClass(myProp) {
                    this.myProp = myProp;
                }
                MyClass.prototype.myMethod = function (arg1, arg2) {
                    console.log('Executing myMethod');
                    return "Message -- arg1: " + arg1 + ", arg2: " + arg2;
                };
                __decorate([
                    log_decorator_1.logProperty, 
                    __metadata('design:type', String)
                ], MyClass.prototype, "myProp", void 0);
                __decorate([
                    log_decorator_1.logMethod, 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [String, Number]), 
                    __metadata('design:returntype', void 0)
                ], MyClass.prototype, "myMethod", null);
                MyClass = __decorate([
                    log_decorator_1.logClassWithArgs({
                        arg: 'some value'
                    }), 
                    __metadata('design:paramtypes', [String])
                ], MyClass);
                return MyClass;
            }());
            exports_1("MyClass", MyClass);
        }
    }
});

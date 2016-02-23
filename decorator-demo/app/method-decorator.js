System.register(['./method-decorator-log'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var method_decorator_log_1;
    var MyClass;
    return {
        setters:[
            function (method_decorator_log_1_1) {
                method_decorator_log_1 = method_decorator_log_1_1;
            }],
        execute: function() {
            MyClass = (function () {
                function MyClass() {
                }
                MyClass.prototype.myMethod = function (arg1, arg2) {
                    console.log('Executing myMethod');
                    return "Message -- arg1: " + arg1 + ", arg2: " + arg2;
                };
                __decorate([
                    method_decorator_log_1.log
                ], MyClass.prototype, "myMethod", null);
                return MyClass;
            }());
            exports_1("MyClass", MyClass);
        }
    }
});

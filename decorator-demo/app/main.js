System.register(['./method-decorator'], function(exports_1) {
    "use strict";
    var method_decorator_1;
    var myClass;
    return {
        setters:[
            function (method_decorator_1_1) {
                method_decorator_1 = method_decorator_1_1;
            }],
        execute: function() {
            myClass = new method_decorator_1.MyClass();
            myClass.myMethod('testing', 1);
        }
    }
});

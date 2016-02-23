
namespace Decorator.Demo {

    class MyClass {
        @log
        myMethod(arg1: string, arg2: number) {
            console.log('Executing myMethod');
            return `Message -- arg1: ${arg1}, arg2: ${arg2}`;
        }
    }

    var myClass = new MyClass();
    myClass.myMethod('testing', 1);

}

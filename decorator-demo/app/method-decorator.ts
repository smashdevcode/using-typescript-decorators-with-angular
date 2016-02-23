import {log} from './method-decorator-log';

export class MyClass {
    @log
    myMethod(arg1: string, arg2: number) {
        console.log('Executing myMethod');
        return `Message -- arg1: ${arg1}, arg2: ${arg2}`;
    }
}

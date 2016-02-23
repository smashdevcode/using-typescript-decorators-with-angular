
(function() {



    // TODO setup some demos to show how Object.defineProperty and
    // Object.getOwnPropertyDescriptor function



    // var obj1 = new Object();
    // console.log(obj1);

    // var obj2 = new Object({ prop1: 'value 1' });
    // console.log(obj2);

    // // Example where we create an object with a couple of sample properties.
    // // (Note that the second parameter maps keys to *property descriptors*.)
    // o = Object.create(Object.prototype, {
    //
    //   // foo is a regular 'value property'
    //   foo: { writable: true, configurable: true, value: 'hello' },
    //
    //   // bar is a getter-and-setter (accessor) property
    //   bar: {
    //     configurable: false,
    //     get: function() { return 10; },
    //     set: function(value) { console.log('Setting `o.bar` to', value); }
    //
    //     /* with ES5 Accessors our code can look like this
    //     get function() { return 10; },
    //     set function(value) { console.log('setting `o.bar` to', value); } */
    //   }
    // });
    //
    // console.log(o);
    // console.log(o.bar);
    // o.bar = 20;
    // console.log(o.bar);


    // // Create a new object whose prototype is a new, empty object
    // // and add a single property 'p', with value 42.
    // o = Object.create({}, { p: { value: 42 } });
    //
    // // by default properties ARE NOT writable, enumerable or configurable:
    //
    // o.p = 24;
    // console.log(o.p);
    //
    // o.q = 12;
    // for (var prop in o) {
    //   console.log(prop);
    // }
    //
    // delete o.p;
    // console.log(o.p);


    // var o, d;
    //
    // o = { get foo() { return 17; } };
    // d = Object.getOwnPropertyDescriptor(o, 'foo');
    // console.log(d);
    // // d is { configurable: true, enumerable: true, get: /*the getter function*/, set: undefined }
    //
    // o = { bar: 42 };
    // d = Object.getOwnPropertyDescriptor(o, 'bar');
    // console.log(d);
    // // d is { configurable: true, enumerable: true, value: 42, writable: true }
    //
    // o = {};
    // Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false });
    // d = Object.getOwnPropertyDescriptor(o, 'baz');
    // console.log(d);
    // // d is { value: 8675309, writable: false, enumerable: false, configurable: false }


})();

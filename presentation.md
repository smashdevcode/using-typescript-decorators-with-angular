
# Using TypeScript Decorators with Angular

## AtScript Annotations

* Google proposed superset of JavaScript
* AtScript added static data types (ala TypeScript) and annotations to JavaScript
* Traceur could be used to transpile AtScript

## Annotations vs Decorators

* Annotations - Declarative way to add metadata to code
* Decorators - Declarative way to annotate and modify classes and properties at design time

## Decorators

A decorator is (from the proposal):

* An expression
* That evaluates to a function
* That takes the target, name, and decorator descriptor as arguments
* And optionally returns a decorator descriptor to install on the target object

## Simple Example

```
// A simple decorator
@decoratorExpression
class MyClass { }

function decoratorExpression(target) {
   // Add a property on target
   target.annotated = true;
}
```

A decorator is just a function that gives you access to the target that needs to be decorated

## Object.defineProperty

Used to create object properties.

### Parameters

* obj - The object on which to define the property.
* prop - The name of the property to be defined or modified.
* descriptor - The descriptor for the property being defined or modified.

## Object.getOwnPropertyDescriptor

Used to get a property descriptor.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors.

* Data Descriptor - property that has a value, which may or may not be writable
* Accessor Descriptor - Property described by a getter-setter pair of functions

A descriptor must be one of these two flavors; it cannot be both.

Descriptors have the following keys:

configurable (both) - True if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
Defaults to false.

enumerable (both) - True if and only if this property shows up during enumeration of the properties on the corresponding object.
Defaults to false.

value (data descriptor) - The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
Defaults to undefined.

writable (data descriptor) - True if and only if the value associated with the property may be changed with an assignment operator.
Defaults to false.

get (accessor descriptor) - A function which serves as a getter for the property, or undefined if there is no getter. The function return will be used as the value of property.
Defaults to undefined.

set (accessor descriptor) - A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as only argument the new value being assigned to the property.
Defaults to undefined.

## Decorator Libraries

Great general library of decorators.

[https://github.com/jayphelps/core-decorators.js](https://github.com/jayphelps/core-decorators.js)

## Metadata Reflection API

You need a polyfill in order to access the metadata that TypeScript emits.

```
npm install reflect-metadata
```

Then you can get the metadata like this:

```
console.log('Type: %s', Reflect.getMetadata('design:type', v, k));
console.log('Param Types: %s', Reflect.getMetadata('design:paramtypes', v, k));
console.log('Return Type: %s', Reflect.getMetadata('design:returntype', v, k));
```

## Browser Support

Do TypeScript decorators work in all browsers?

* Any browser that supports the Object.defineProperty and Object.getOwnPropertyDescriptor methods
* Chrome 5, Firefox 4, IE 9, Opera 12, Safari 5.1

## TypeScript Compiler Options

```
"compilerOptions": {
    "target": "es5",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": false
}
```

* Do you have to have the experimental decorators option enabled?
 * Yes... or else you get a compiler warning :)

## Decorator Demo

## Code Analysis Demo

## JavaScript Object Demo

## Metadata Demo

## Angular 2 Demo

## Decorator Library Demo

## Angular 1.x Demo

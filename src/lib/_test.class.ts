import { TestingToBeArrayOf } from "./testing-to-be-array-of.class";
import { TestingToBeInstance } from "./testing-to-be-instance.class";

// Exercise for the reader: do it without any
function mixin(a: any, b: any): any {
  // Choice: Should isA apply to either mixin? Should it apply to neither?
  const aNotB = Object.defineProperties(Object.create(a.prototype), Object.getOwnPropertyDescriptors(b.prototype));
  const shadowClass: any = function shadowClass(){}
  shadowClass.prototype = aNotB;
  class mixinImpl extends shadowClass {}
  return mixinImpl;
}

// class Cv3 extends mixin(A, B) { }

// class Tst extends mixin(TestingToBeArrayOf, TestingToBeInstance) implements TestingToBeArrayOf, TestingToBeInstance {
// }

// const a = new Tst(true, true);




// REVIEW: 
// Mixin 1
// function MixinA<T extends new (...args: any[]) => {}>(Base: T) {
//   return class extends Base {
//     methodA() {
//       return "Method A";
//     }
//   };
// }

// // Mixin 2
// function MixinB<T extends new (...args: any[]) => {}>(Base: T) {
//   return class extends Base {
//     methodB() {
//       return "Method B";
//     }
//   };
// }

// // Base class
// class BaseClass {
//   baseMethod() {
//     return "Base method";
//   }
// }

// // Combined class using mixins
// class CombinedClass extends MixinA(MixinB(BaseClass)) {
//   methodC() {
//     return "Method C";
//   }
// }

// // Usage
// const instance = new CombinedClass();
// console.log(instance.baseMethod()); // Output: Base method
// console.log(instance.methodA());    // Output: Method A
// console.log(instance.methodB());    // Output: Method B
// console.log(instance.methodC());    // Output: Method C







// REVIEW: x
// // Base Mixin function
// function mixin<T extends new (...args: any[]) => {}>(classes: T[]) {
//   return classes.reduce((acc, currClass) => {
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         Object.assign(this, new currClass());
//       }
//     };
//   });
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // Combined class using the recursive mixin function
// class CombinedClass extends mixin([ClassA, ClassB, ClassC]) {
//   methodD() {
//     return "Method D";
//   }
// }

// // Usage
// const combinedInstance = new CombinedClass();
// console.log((combinedInstance as any).methodA()); // Output: Method A
// console.log((combinedInstance as any).methodB()); // Output: Method B
// console.log((combinedInstance as any).methodC()); // Output: Method C
// console.log((combinedInstance as any).methodD()); // Output: Method D





// REVIEW: type
// // Recursive Mixin function to accept an array of classes
// function mixin<T extends new (...args: any[]) => {}>(classes: T[]) {
//   return classes.reduce((acc, currClass) => {
//     console.log(acc, currClass)
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         Object.assign(this, new currClass());
//       }
//     };
//   }); // , class {}
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// type Constructor<T = {}> = new (...args: any[]) => T;

// const m = mixin([ClassA, ClassB, ClassC]) as Constructor<ClassA & ClassB & ClassC>;

// // Combined class using the modified mixin function
// class CombinedClass extends m {
//   methodD() {
//     return "Method D";
//   }
// }

// // Usage
// const combinedInstance = new CombinedClass();
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C
// console.log(combinedInstance.methodD()); // Output: Method D










// // Utility type to get instance types of classes
// type Constructor<T = {}> = new (...args: any[]) => T;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(classes: T): Constructor<any> {
//   return classes.reduce((acc, currClass) => {
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         Object.assign(this, new currClass());
//       }
//     };
//   }, class {});
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // Use the mixin function to combine ClassA, ClassB, and ClassC
// const MixedClass = mixin([ClassA, ClassB, ClassC]);

// // Extend the MixedClass to add additional functionality
// class CombinedClass extends MixedClass {
//   methodD() {
//     return "Method D";
//   }
// }

// // Usage
// const combinedInstance = new CombinedClass();
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C
// console.log(combinedInstance.methodD()); // Output: Method D







// // Utility type to get instance types of classes
// type Constructor<T = {}> = new (...args: any[]) => T;

// // Mixin function: combining multiple class constructors into one, preserving prototype chain
// function mixin<T extends Constructor[]>(classes: T) {
//   return classes.reduce((acc, currClass) => {
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         // Call the constructor of each class to initialize properties
//         Object.assign(this, new currClass());
//       }
//     };
//   }, class {});
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }


// type Ctr<T = {}> = new (...args: any[]) => T;

// // Use the mixin function to combine ClassA, ClassB, and ClassC
// const MixedClass = mixin([ClassA, ClassB, ClassC]) as Ctr<ClassA & ClassB & ClassC>;

// // Extend the MixedClass to add additional functionality
// class CombinedClass extends MixedClass {
//   methodD() {
//     return "Method D";
//   }
// }

// // Usage
// const combinedInstance = new CombinedClass();
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C
// console.log(combinedInstance.methodD()); // Output: Method D









// // Utility type to get instance types of classes
// type Constructor<T = {}> = new (...args: any[]) => T;

// // Mixin function: combining multiple class constructors into one, preserving prototype chain
// function mixin<T extends Constructor[]>(classes: T) {
//   return classes.reduce((acc, currClass) => {
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         Object.assign(this, new currClass()); // Initialize properties of the current class
//       }
//     };
//   }, class {});
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // Create a type that includes all the methods of ClassA, ClassB, and ClassC
// type MixedClassType = ClassA & ClassB & ClassC;

// // Use the mixin function to combine ClassA, ClassB, and ClassC
// const MixedClass = mixin([ClassA, ClassB, ClassC]) as Constructor<MixedClassType>;

// // Extend the MixedClass to add additional functionality
// class CombinedClass extends MixedClass {
//   methodD() {
//     return "Method D";
//   }
// }

// // Usage
// const combinedInstance = new CombinedClass();
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C
// console.log(combinedInstance.methodD()); // Output: Method D





// REVIEW:
// // Mixin function: combining multiple class constructors into one
// function mixin(...classes: any[]) {
//   class MixedClass {}

//   // Copy methods from each class to the MixedClass prototype
//   for (const cls of classes) {
//     Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//       if (name !== 'constructor') {
//         (MixedClass.prototype as any)[name] = cls.prototype[name];
//       }
//     });
//   }

//   return MixedClass;
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // Use the mixin function to combine ClassA, ClassB, and ClassC
// const MixedClass = mixin(ClassA, ClassB, ClassC);

// class ClassMain extends MixedClass {}

// // Create an instance of the combined class
// const combinedInstance = new ClassMain();
// console.log((combinedInstance as any).methodA()); // Output: Method A
// console.log((combinedInstance as any).methodB()); // Output: Method B
// console.log((combinedInstance as any).methodC()); // Output: Method C







// REVIEW: OK
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T) {
//   class MixedClass {}

//   // Copy methods from each class to the MixedClass prototype
//   for (const cls of classes) {
//     Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//       if (name !== 'constructor') {
//         (MixedClass.prototype as any)[name] = cls.prototype[name];
//       }
//     });
//   }

//   return MixedClass as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // Use the mixin function to combine ClassA, ClassB, and ClassC
// const MixedClass = ;

// class Classes extends mixin(ClassA, ClassB, ClassC) {

// }

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C








// REVIEW: OK
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T): Constructor<UnionToIntersection<IntersectionOfInstances<T>>> {
//   return class extends (class {} as Constructor) {
//     // Copy methods from each class to this class's prototype
//     constructor(...args: any[]) {
//       super(...args);
//       for (const cls of classes) {
//         Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = cls.prototype[name].bind(this);
//           }
//         });
//       }
//     }
//   } as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   methodA() {
//     return "Method A";
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Define MixedClass extending the result of the mixin function
// class MixedClass extends mixin(ClassA, ClassB, ClassC, ClassD) {}

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.methodA()); // Output: Method A
// console.log(combinedInstance.methodB()); // Output: Method B
// console.log(combinedInstance.methodC()); // Output: Method C
// console.log(combinedInstance.methodD()); // Output: Method D





// REVIEW:

// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T): Constructor<UnionToIntersection<IntersectionOfInstances<T>>> {
//   return class extends (class {} as Constructor) {
//     // Copy methods from each class to this class's prototype
//     constructor(...args: any[]) {
//       super(...args);
//       for (const cls of classes) {
//         Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = cls.prototype[name].bind(this);
//           }
//         });
//       }
//     }
//   } as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   #methodA() { // Private method
//     return "Method A";
//   }

//   public publicMethodA() {
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Define MixedClass extending the result of the mixin function
// class MixedClass extends mixin(ClassA, ClassB, ClassC, ClassD) {
//   // public publicMethodA(): any {
//   //   return this.publicMethodA(); // Call public method from ClassA
//   // }
// }

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.publicMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());       // Output: Method B
// console.log(combinedInstance.methodC());       // Output: Method C
// console.log(combinedInstance.methodD());       // Output: Method D

// // The following line would cause a TypeScript error because #methodA is private:
// // console.log(combinedInstance.#methodA()); // Error: Property '#methodA' is not accessible outside class 'ClassA'.






// REVIEW:
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T): Constructor<UnionToIntersection<IntersectionOfInstances<T>>> {
//   return class extends (class {} as Constructor) {
//     // Copy methods from each class to this class's prototype
//     constructor(...args: any[]) {
//       super(...args);
//       for (const cls of classes) {
//         Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = cls.prototype[name].bind(this);
//           }
//         });
//       }
//     }
//   } as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   // Private method
//   #methodA() { 
//     return "Method A"; 
//   }

//   // Public method to expose private method
//   public publicMethodA() {
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Define MixedClass extending the result of the mixin function
// class MixedClass extends mixin(ClassA, ClassB, ClassC, ClassD) {
//   // The publicMethodA from ClassA is already available due to the mixin
// }

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.publicMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());       // Output: Method B
// console.log(combinedInstance.methodC());       // Output: Method C
// console.log(combinedInstance.methodD());       // Output: Method D

// // The following line would cause a TypeScript error because #methodA is private:
// // console.log(combinedInstance.#methodA()); // Error: Property '#methodA' is not accessible outside class 'ClassA'.








// REVIEW:
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T): Constructor<UnionToIntersection<IntersectionOfInstances<T>>> {
//   return class extends (class {} as Constructor) {
//     // Copy methods from each class to this class's prototype
//     constructor(...args: any[]) {
//       super(...args);
//       for (const cls of classes) {
//         Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = cls.prototype[name].bind(this);
//           }
//         });
//       }
//     }
//   } as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   // Private method
//   #methodA() {
//     return "Method A";
//   }

//   // Public method to expose private method
//   public publicMethodA() {
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Define MixedClass extending the result of the mixin function
// class MixedClass extends mixin(ClassA, ClassB, ClassC, ClassD) {
//   public accessMethodA() {
//     // Call the public method that accesses the private method from ClassA
//     return this.publicMethodA();
//   }
// }

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.accessMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());       // Output: Method B
// console.log(combinedInstance.methodC());       // Output: Method C
// console.log(combinedInstance.methodD());       // Output: Method D

// // The following line would cause a TypeScript error because #methodA is private:
// // console.log(combinedInstance.#methodA()); // Error: Property '#methodA' is not accessible outside class 'ClassA'.




// REVIEW:
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// type UnionToIntersection<U> = 
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
//     ? R 
//     : never;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type IntersectionOfInstances<T extends Constructor[]> = 
//   T extends Array<infer U> 
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(...classes: T): Constructor<UnionToIntersection<IntersectionOfInstances<T>>> {
//   return class extends (class {} as Constructor) {
//     // Copy methods from each class to this class's prototype
//     constructor(...args: any[]) {
//       super(...args);
//       for (const cls of classes) {
//         Object.getOwnPropertyNames(cls.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = cls.prototype[name].bind(this);
//           }
//         });
//       }
//     }
//   } as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   // Private method
//   #methodA() { 
//     return "Method A"; 
//   }

//   // Public method to expose private method
//   public callMethodA() {
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Define MixedClass extending the result of the mixin function
// class MixedClass extends mixin(ClassA, ClassB, ClassC, ClassD) {
//   public accessMethodA() {
//     // Call the public method that accesses the private method from ClassA
//     return this.callMethodA(); // Access public method that internally calls the private method
//   }
// }

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.accessMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());       // Output: Method B
// console.log(combinedInstance.methodC());       // Output: Method C
// console.log(combinedInstance.methodD());       // Output: Method D

// // The following line would cause a TypeScript error because #methodA is private:
// // console.log(combinedInstance.#methodA()); // Error: Property '#methodA' is not accessible outside class 'ClassA'.










// REVIEW:
// // Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(classes: T) {
//   return classes.reduce((acc, currClass) => {
//     // console.log(`acc: `, acc, currClass);
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         // Initialize properties from the current class
//         Object.assign(this, new currClass());
//         console.log(`this:`, this, new currClass());
//       }
//     };
//   }, class {} as Constructor) as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Utility types to convert a tuple of constructors to an intersection of instance types
// type UnionToIntersection<U> =
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void
//     ? R
//     : never;

// type IntersectionOfInstances<T extends Constructor[]> =
//   T extends Array<infer U>
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Example classes to mix
// class ClassA {
//   #methodA() {
//     return "Method A";
//   }

//   public callMethodA() {
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Create a MixedClass extending the mixin of multiple classes
// class MixedClass extends mixin([ClassA, ClassB, ClassC, ClassD]) {}

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance);
// console.log(combinedInstance.callMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());      // Output: Method B
// console.log(combinedInstance.methodC());      // Output: Method C
// console.log(combinedInstance.methodD());      // Output: Method D









// REVIEW:
// Utility type to define the constructor of a class
// type Constructor<T = {}> = new (...args: any[]) => T;

// // Utility type to convert a tuple of constructors to an intersection of instance types
// type UnionToIntersection<U> =
//   (U extends any ? (x: U) => void : never) extends (x: infer R) => void
//     ? R
//     : never;

// type IntersectionOfInstances<T extends Constructor[]> =
//   T extends Array<infer U>
//     ? (U extends Constructor ? InstanceType<U> : never)
//     : never;

// // Mixin function: combining multiple class constructors into one
// function mixin<T extends Constructor[]>(classes: T) {
//   return classes.reduce((acc, currClass) => {
//     return class extends acc {
//       constructor(...args: any[]) {
//         super(...args);
//         // Call the constructor of each class to initialize properties
//         Object.assign(this, new currClass());

//         // Copy methods from the current class prototype
//         Object.getOwnPropertyNames(currClass.prototype).forEach((name) => {
//           if (name !== 'constructor') {
//             (this as any)[name] = currClass.prototype[name].bind(this);
//           }
//         });
//       }
//     };
//   }, class {} as Constructor) as Constructor<UnionToIntersection<IntersectionOfInstances<T>>>;
// }

// // Example classes to mix
// class ClassA {
//   #methodA() {
//     return "Method A";
//   }

//   public callMethodA() {
//     return "Method A";
//     return this.#methodA(); // Accessing the private method within the class
//   }
// }

// class ClassB {
//   methodB() {
//     return "Method B";
//   }
// }

// class ClassC {
//   methodC() {
//     return "Method C";
//   }
// }

// // New class to add
// class ClassD {
//   methodD() {
//     return "Method D";
//   }
// }

// // Create a MixedClass extending the mixin of multiple classes
// const MixedClass = mixin([ClassA, ClassB, ClassC, ClassD]);

// // Create an instance of the combined class
// const combinedInstance = new MixedClass();

// // Accessing the methods
// console.log(combinedInstance.callMethodA()); // Output: Method A
// console.log(combinedInstance.methodB());      // Output: Method B
// console.log(combinedInstance.methodC());      // Output: Method C
// console.log(combinedInstance.methodD());      // Output: Method D


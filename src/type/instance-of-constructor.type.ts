import { Constructor } from "@angular-package/type";
// import { UnionToIntersection } from './union-to-intersection.type';

// Utility type to extract instance types from constructors
export type InstanceOfConstructor<T> = T extends Constructor<infer I> ? I : never;

// // Usage.
// class ClassA {
//   public methodA() {}
// }
// class ClassB {
//   public methodB() {}
// }
// class ClassC {
//   public methodC() {}
// }

// const mixin = function<T extends Constructor<any>[], C = {}>(...classes: T): Constructor<UnionToIntersection<InstanceOfConstructor<T[number]>>> {
//   return null as any;
// }

// class ClassD extends mixin(ClassA, ClassB, ClassC) {}

// const c = new ClassD();

// c.methodA();
// c.methodB();
// c.methodC();

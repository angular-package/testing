import { Constructor } from "@angular-package/type";

// Utility type to convert a tuple of constructors to an intersection of instance types
export type IntersectionOfInstances<T extends Constructor<C>[], C = {}> = 
  T extends Array<infer U> 
    ? (U extends Constructor<C> ? InstanceType<U> : never)
    : never;

import { Constructor } from '@angular-package/type';
// Written by: ChatGPT.
export type InstanceTypes<T extends Constructor<any>[]> = T extends [infer First, ...infer Rest]
  ? (First extends Constructor<any> ? InstanceType<First> : never) & InstanceTypes<Rest extends Constructor<any>[] ? Rest : []>
  : {};
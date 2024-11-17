import { Constructor } from '@angular-package/type';
// Written by: ChatGPT.
export type InstanceTypes<T extends readonly Constructor<any>[]> = T extends readonly [infer First, ...infer Rest]
  ? (First extends Constructor<any> ? InstanceType<First> : never) & InstanceTypes<Rest extends Constructor<any>[] ? Rest : []>
  : {};

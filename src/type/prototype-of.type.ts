// Written by ChatGPT: Utility type to extract the prototype of a class
export type PrototypeOf<T> = T extends { prototype: infer P } ? P : never;

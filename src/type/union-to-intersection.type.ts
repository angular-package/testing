// Written by ChatGPT: Utility type to convert a union type (|) into an intersection type (&)
export type UnionToIntersection<U> = 
  (U extends any ? (x: U) => void : never) extends (x: infer R) => void 
    ? R 
    : never;
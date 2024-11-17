// Class.
import { TestingExpectationProxy } from "../lib/testing-expectation.class";
// Type.
import { Constructor } from "@angular-package/type";
import { InstanceTypes } from "./instance-types.type";
// Type.
export type TestingExpectationType<T extends readonly Constructor<any>[]> = TestingExpectationProxy<T> & InstanceTypes<T>;
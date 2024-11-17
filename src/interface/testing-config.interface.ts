import { TestingDescribe, TestingExpect, TestingIt } from "../lib";
//
export interface TestingConfig<
  Descriptions extends string = string,
  Expectations extends string = string
> {
  describe?: TestingDescribe<Descriptions>,
  it?: TestingIt<Expectations>,
  expect?: TestingExpect
}

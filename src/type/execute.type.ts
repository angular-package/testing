import { Executable } from "./executable.type";
/**
 *
 */
export type Execute = boolean | {
  describe?: boolean,
  it?: boolean,
  executable?: {
    describe?: Executable,
    it?: Executable
  }
};

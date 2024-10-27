import { TestingToBeArrayOf } from "../../lib/testing";


const t = new TestingToBeArrayOf(
  true,
  true,
  {},
  false
);

t.toBeArrayOfBigInt([BigInt(1)]);


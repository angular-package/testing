// Class.
import { TestingItToBeArrayOf } from '../main';
// Execute.
import { ExecuteSpec } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new TestingItToBeArrayOf(
    executeDescribe || ExecuteSpec.describe.it["testing-it-to-be-arrayof"],
    executeIt || ExecuteSpec.it.it["testing-it-to-be-arrayof"]
  );
  t.describe(`TestingItToBeArrayOf`, () => t
    .bigint([BigInt(27), BigInt(37), BigInt(47)])
    .boolean([false, true, false, false, true])
    .date([new Date(), new Date(), new Date(), new Date()])
    .defined(['b', 'c', 'd', 'e'])
    .false([false, false, false, false, false])
    .null([null, null, null])
    .number([27, 37, 47])
    .regExp([new RegExp('a'), new RegExp(/a/), new RegExp('b')])
    .string(['a', 'b', 'c'])
    .symbol([Symbol(27), Symbol('a'), Symbol('b')])
    .true([true, true, true])
    .undefined([undefined, undefined, undefined])
  );
}

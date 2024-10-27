import { TestingItToBeArrayOf } from "../../lib";
// 
import { Execute } from "../execute";

const execute = true;
const executeDescribe = true;
const executeIt = true;

// const t = new Testing(true, true);

// const t = new Testing(false, false, {
//   describe: [1, 2],
//   it: [1, 2]
// });

// Counter.
// t.describe('[counter]', () => {
//   t.it('[counter] it', () => {
//     t.expect.toBeArray([27, 37]);
//   });

//   t.describe('[counter]', () => {
//     t.it('[counter]', () => {
//       t.expect.toEqual('a', 'a');
//     });
//   });

//   t.describe('[counter]', () => {
//     t.it('[counter]', () => {});
//   });

//   t.describe('[counter]', () => {
//     t.it('[counter]', () => {});
//   });

//   t.toBeArray([37, 47], undefined, '[counter] toBeArray');

// });

// t.describe('[counter]', () => {
//   t.it('[counter]', () => {});
// });

// t.describe('[counter]', () => {
//   t
//     .toBeArray([37, 47], undefined, '[counter] toBeArray')
//     .toBeArray([37, 47], undefined, '[counter] toBeArray');

//   t.describe('[counter]', () => {
//     t.toBeInstanceOfTypeError(new TypeError(), undefined, '[counter] toBeInstanceOfTypeError');
//   })
// })
// .describe('[counter]', () => {
//   t
//     .toBeArray([37, 47], undefined, '[counter] toBeArray')
//     .toBeArray([37, 47], undefined, '[counter] toBeArray');
// });

if (execute) {
  const t = new TestingItToBeArrayOf(
    executeDescribe || Execute.describe.it["testing-it-to-be-arrayof"],
    executeIt || Execute.it.it["testing-it-to-be-arrayof"]
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

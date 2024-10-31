export {};

// const arrayMatcher: jasmine.CustomMatcherFactories = {
//   toBeSorted: (
//     util: jasmine.MatchersUtil,
//   ) => {
//     return  {
//       compare: (actual: any): jasmine.CustomMatcherResult => {
//         const result: jasmine.CustomMatcherResult = {
//           pass: true,
//           message: ''
//         }
//         for(let i = 0; i < actual.length; i++) {
//           if (actual.length - 1 === i) {
//             continue;
//           }

//           if(actual[i] <= actual[i + 1]) {
//             continue;
//           } else {
//             result.pass = false;
//             result.message = 'This array is not sorted';
//             break;
//           }
//         }
//         return result;
//       }
//     }
//   }
// }

// export { arrayMatcher };

// Jasmine
//   .testing('toBeMatchers')
//   .Config('Expects', (tests) => {
//     // it('aaaa', () => {});
//     tests.toBeNull('aaa');

//     // tests.it('aaaa', () => {
//     //   matchers.to.be.array(TESTING_ARRAY_BIGINT);
//     // });
//   });

// const a: jasmine.MatchersUtil = {''}


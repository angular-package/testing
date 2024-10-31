// Class.
import { Testing } from "./main";

// Constant.
import { ExecuteSpec } from './execute';

const execute = false;
const executeDescribe = true;
const executeIt = true;

if (execute) {
  const t = new Testing<
    'Array' |
    'Number' |
    'String' |
    'Boolean'
  , 'of number' | 'letters'>(
    executeDescribe || ExecuteSpec.describe['how-to-generic-type-variable'],
    executeIt || ExecuteSpec.it['how-to-generic-type-variable']
  );

  const arr = [27, 37, 47];

  t.describe('Array', () => t
    .it('of number', () => t.expect
      .toBeArray(arr)
      .toBeNumber(arr[2])
      .toBeTypeOf(arr[1], 'number')
    )
  );
}

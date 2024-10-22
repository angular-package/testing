import { Testing } from "../lib";

const t = new Testing(true, true);

let arr: any[];

// native
beforeEach(() => {
  arr = ['a', 'b', 'c'];
});

t.describe('How to use beforeEach()', () => t
  .beforeEach(() => (arr = ['a', 'b', 'c']))
  .spec(e => e.toBeArray(arr).not.toBeBoolean(arr))
  .it('it', () => t.expect.toBeArray(arr))
);

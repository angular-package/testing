// Object.
import { is } from '@angular-package/type';
// Class.
import { Testing } from '../lib/testing.class';
/**
 * Initialize testing.
 */
const t = new Testing(
  true, // Disallows executing the `describe()` method globally.
  true, // Disallows executing the `it()` method globally.
  {
    // describe: [1, 2, 3, 5], // Executable unique numbers of `describe()` methods to execute when global executing is disallowed.
    // it: [1], // Executable unique numbers of `it()` methods inside the `describe()` to execute when global executing is disallowed.
  },
  true
);

t.describe('[counter] First describe', () => 
  t
    .it('[counter] First it() in first describe 1-1', () =>
      expect(false).toBeFalse()
    )
    .it('[counter] Second it() in first describe 1-2', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Second it() in first describe 1-3', () =>
      expect(true).toBeTrue()
    )
    .it('[counter] Fourth it() in first describe() 1-4', () =>
      expect(true).toBeTrue()
    )
    .describe('[counter] Second describe()', () => {
      t.it('[counter] First it() in second describe() 2-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Third describe()', () => {
      t.it('[counter] First it() in third describe() 3-1', () =>
        expect(true).toBeTrue()
      );
    })
    .describe('[counter] Fourth describe()', () => {
      t.it('[counter] First it() in fourth describe() 4-1', () =>
        expect(true).toBeTrue()
      );
    })
);

t.describe('[counter] Fifth describe', () =>
  t.it('[counter] First it() in fifth describe 5-1', () =>
    expect(false).toBeFalse()
  )
);


# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0-alpha.3] - 2024-10-31

- README.md compatibility.

## [3.0.0-alpha.2] - 2024-10-31

- The package built-in angular 18 and files minified to lower unpacked size.
- Removed `peerDependencies` of `tslib` and `jasmine`.

## [3.0.0-alpha.1] - 2024-10-31

- Added `type` and `override` .
- Removed `Storage` from tests.

## [3.0.0-alpha.0] - 2024-10-30

- Removed `Storage`.

## [3.0.0-alpha] - 2024-10-30

### [3.0.0-alpha] Added

- Added `TestingActual` to initialize multiple tests on `actual` or `spy` param.
- Added `TestingCustom` to include tests on initialization.
- Added `TestingExpectation` class with methods directly accessed by using method names instead of nested structure, but using it through the `TestingExpectTo`.
- Added `expectations` directory with classes where methods are accessed by using nested object structure and method names.
- Added `it` directory with classes with methods are accessed by using nested object structure and method names.
- Added `testing` directory with classes where methods are directly accessed by using method names instead of nested structure, but using it.
- Added `asyncExpect` and jasmine matchers.

### [3.0.0-alpha] Updated

- Updated `Testing` to mixin tests from `testing` directory.

## [2.0.0-rc] - 2022-01-30

### [2.0.0-rc] Added

- Added `stringOfLengthBetween()` method of `TestingToBeMatchers`. [2854f54]
- Added `randomNumber()` and `randomString()` helper functions. [cbe05f5]
- Added `objectKeysIn()`, `objectSomeKeys()`, `stringIncludes()` and `stringIncludesSome()` methods of `TestingToBeMatchers`. [9af6d2f]

[2854f54]: https://github.com/angular-package/testing/commit/2854f544873d8c8dade092a73377e1ab26417e83
[cbe05f5]: https://github.com/angular-package/testing/commit/cbe05f5f21881878aa11f3ef7938c599a5e36ed3

### [2.0.0-rc] Changed

- Updated `stringOfLength()` to the single `length` parameter. [d82f066]
- ~~Updated `numberBetween()` and `stringOfLength()` methods of `TestingToBeMatchers` to use `MinMax` interface from `@angular-package/type`.~~ [6af0073]
  - Change the parameters to `min` and `max` of `stringOfLength()` and `numberBetween()` method. [d82f066]
- Updated default messages of `expectation fail output` and use `withContext()` method to display it. [9af6d2f]
- Updated the `objectKey()`, `objectKeyIn()`, `objectKeys()` and ~~`numberBetween()`~~ methods cause of updated `@angular-package/type`. [9af6d2f]
  - Updated to a new **`@angular-package/type`**. [9af6d2f]
  - Changed the `key` property type from `Key | Key[]` to `PropertyKey` in the `objectKey()` `objectKeyIn()` methods.
  - Changed the `keys` property type from `Key[]` to `PropertyKey[]` in the `objectKeys()` method.
- Updated the `execute` parameter to be optional by setting the default value to `true` for all methods. [dd18b84]
- `Testing.prototype.toBeInstanceOfFunction()` method uses `instanceof` operator to validate. [dd18b84]

[d82f066]: https://github.com/angular-package/testing/commit/d82f0665a8befb2b9515ae8dbbd5807f6c96eb5b
[d82f066]: https://github.com/angular-package/testing/commit/d82f0665a8befb2b9515ae8dbbd5807f6c96eb5b
[6af0073]: https://github.com/angular-package/testing/commit/6af007350f267ee054a34d33ddf3b671d879b632
[9af6d2f]: https://github.com/angular-package/testing/commit/9af6d2f2c482a903a2a55303e7fc05725741e9c0

### [2.0.0-rc] Removed

- Removed unused `toBeResolved()` method. [dd18b84]

[dd18b84]: https://github.com/angular-package/testing/commit/dd18b8469c6099246f4e9f8a9ac9f9d891c6e1f8

## [1.1.0] - 2021-07-19

### Added [1.1.0]

- Abstract `TestingExpect` class to manage `expect()` function of jasmine. [`77f326a`][77f326a]
- Class `TestingToBeMatchers` with matchers that use the `toBe()` method of `jasmine.Matchers`. [`afb98f5`][afb98f5]
- Tests for the `TestingToBeMatchers`. [`3bf2046`][3bf2046]

### Changed [1.1.0]

- Update README.md with `TestingToBeMatchers`. [`4b81d0c`][4b81d0c] [`bdfbfe2`][bdfbfe2] [`8229336`][8229336] [`c17d11e`][c17d11e] [`9e0e368`][9e0e368]

[77f326a]: https://github.com/angular-package/testing/commit/77f326a5bc7154b55f6944e60b24cddb5bfe93df
[afb98f5]: https://github.com/angular-package/testing/commit/afb98f557296239b10227e8f0bde4f8b62fd5049
[3bf2046]: https://github.com/angular-package/testing/commit/3bf2046ee35f9d0ae4769cb107be2c61e281af34
[4b81d0c]: https://github.com/angular-package/testing/commit/4b81d0cb26e145bed02656064ac9c86a10bfa296
[bdfbfe2]: https://github.com/angular-package/testing/commit/bdfbfe226589620cba6a912694dcfd9cfc3020ac
[8229336]: https://github.com/angular-package/testing/commit/8229336755c6efd3151d974d53ec8860cf108280
[c17d11e]: https://github.com/angular-package/testing/commit/c17d11e1c23db009c3bec05e84a02f75a90f7fa0
[9e0e368]: https://github.com/angular-package/testing/commit/9e0e3689acb765fe4ffd53962d7b7607cd2761a3

## [1.0.1] - 2021-07-14
  
### Changed

- Change peerDependencies. [`10be25d`][10be25d]
- 946803f Change the parameter `value` description. [`58bdbad`][58bdbad]

### Fixed

- Fix `toBe()` and `toEqual()` method by adding a generic `Value` instead of any. [`58bdbad`][58bdbad]
- Fix `instanceof` link in the README.md. [`946803f`][946803f]

[10be25d]: https://github.com/angular-package/testing/commit/10be25daffacf87f38b469b999cbb2b213fb90a1
[58bdbad]: https://github.com/angular-package/testing/commit/58bdbadf4fc62aed1fac3680168bb8bb8e35e5dd
[946803f]: https://github.com/angular-package/testing/commit/946803f1a8770aaeeab0821f0efc8e8ad932fd7d

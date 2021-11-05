
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] - 2021-10-19

### [2.0.0] Added

* [9af6d2f]  
  Added `objectSomeKeys()`, `stringIncludes()` and `stringIncludesSome()` methods.

### [2.0.0] Updated

* [9af6d2f]  
  Updated to a new **`@angular-package/type`**.  
  Updated default messages of `expectation fail output` and use `withContext()` method to display it.  
  Updated the `objectKey()`, `objectKeyIn()`, `objectKeys()` and `numberBetween()` methods cause of updated `@angular-package/type`.  

* [dd18b84]  
  Updated the `execute` parameter to be optional by setting the default value to `true` for all methods.  
  `toBeInstanceOfFunction()` method uses `instanceof` operator to validate.  

[9af6d2f]: https://github.com/angular-package/testing/commit/9af6d2f2c482a903a2a55303e7fc05725741e9c0

### [2.0.0] Removed

* [dd18b84]  
  Removed unused `toBeResolved()` method.  

[dd18b84]: https://github.com/angular-package/testing/commit/dd18b8469c6099246f4e9f8a9ac9f9d891c6e1f8

## [1.1.0] - 2021-07-19

### Added [1.1.0]

* [`77f326a`][77f326a]  
  Abstract `TestingExpect` class to manage `expect()` function of jasmine.

* [`afb98f5`][afb98f5]  
  Class `TestingToBeMatchers` with matchers that use the `toBe()` method of `jasmine.Matchers`.

* [`3bf2046`][3bf2046]  
  Tests for the `TestingToBeMatchers`.

### Changed [1.1.0]

* [`4b81d0c`][4b81d0c] [`bdfbfe2`][bdfbfe2] [`8229336`][8229336] [`c17d11e`][c17d11e] [`9e0e368`][9e0e368]  
  Update README.md with `TestingToBeMatchers`.

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

* [`10be25d`][10be25d]  
  Change peerDependencies.

* [`58bdbad`][58bdbad]  
  946803f Change the parameter `value` description.

### Fixed

* [`58bdbad`][58bdbad]  
  Fix `toBe()` and `toEqual()` method by adding a generic `Value` instead of any.

* [`946803f`][946803f]  
  Fix `instanceof` link in the README.md.

[10be25d]: https://github.com/angular-package/testing/commit/10be25daffacf87f38b469b999cbb2b213fb90a1
[58bdbad]: https://github.com/angular-package/testing/commit/58bdbadf4fc62aed1fac3680168bb8bb8e35e5dd
[946803f]: https://github.com/angular-package/testing/commit/946803f1a8770aaeeab0821f0efc8e8ad932fd7d

# Change Log

The following is a curated list of changes in the Enact core module, newest changes on the top.

## [unreleased]

## [1.0.0-alpha.2] - 2016-10-21

This version includes a lot of refactoring from the previous release. Developers need to switch to the new enact-dev command-line tool.

### Added

- `stopImmediate` to `core/handle`
- Many more unit tests

### Changed

- Computed properties in `kind()` no longer mutate props. In other words, changing the value of a prop in one computed property does not affect the value of that prop in another computed property.

### Fixed

- Inline docs updated to be more consistent and comprehensive

## [1.0.0-alpha.1] - 2016-09-26

Initial release
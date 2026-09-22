import _flatten from './_flatten.js';

// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
// The `guard` check allows it to work with `_.map`.
export default function flatten(array, depth, guard) {
  return _flatten(array, guard ? void 0 : depth, false);
}

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
// fix: `matchMedia` not present, legacy browsers require a polyfill
global.window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {}, // deprecated
  removeListener: () => {}, // deprecated
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => {},
});

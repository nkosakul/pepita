// Returns a node.
export const $ = (selector, root = document) => root.querySelector(selector);

// Returns an array of nodes.
export const $$ = (selector, root = document) => [
  ...root.querySelectorAll(selector),
];

// Adds multiple event listeners at once.
export const addListener = (el = window, listeners, func, capture = false) => {
  listeners
    .split(' ')
    .forEach((listener) => el.addEventListener(listener, func, capture));
};

// Removes multiple event listener at once.
export const removeListener = (el = window, listeners, func, capture) => {
  listeners
    .split(' ')
    .forEach((listener) => el.removeEventListener(listener, func, capture));
};

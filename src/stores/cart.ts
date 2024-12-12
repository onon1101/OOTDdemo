import { writable } from 'svelte/store';

export const cartState = writable(false);

export function enableCart() {
    cartState.set(true);
}

export function disableCart() {
    cartState.set(false);
}
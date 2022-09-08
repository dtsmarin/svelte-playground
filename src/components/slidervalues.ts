import { type Writable, writable, derived } from 'svelte/store';
export const slider0 = writable<number>(0)
export const slider1 = writable<number>(0)
export const slider2 = writable<number>(0)
export const slider3 = writable<number>(0)
export const slider4 = writable<number>(0)
export const slider5 = writable<number>(0)
export const selectedArt = writable<number>(0)
export const pad0 = [writable<number>(0),writable<number>(0)]
const { subscribe, update } = writable(slider0);

export default { subscribe };
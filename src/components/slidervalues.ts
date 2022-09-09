import { type Writable, writable, derived, get } from 'svelte/store'
export const slider0 = writable<number>(0)
export const slider1 = writable<number>(0)
export const slider2 = writable<number>(0)
export const slider3 = writable<number>(0)
export const slider4 = writable<number>(0)
export const slider5 = writable<number>(0)
export const selectedArt = writable<number>(0)
export const pad0 = [writable<number>(0), writable<number>(0)]
export const sliderArray = writable([
  { id: '0', value: writable<number>(1) },
  { id: '1', value: writable<number>(1) },
  { id: '2', value: writable<number>(2) },
  { id: '3', value: writable<number>(4) },
  { id: '4', value: writable<number>(5) },
  { id: '5', value: writable<number>(3) },
])

const { subscribe, update } = writable(slider0)

export default { subscribe }

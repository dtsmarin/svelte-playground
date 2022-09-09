import { type Writable, writable } from 'svelte/store'

export const sliderArray = writable([
  { id: '0', value: writable<number>(0) },
  { id: '1', value: writable<number>(0) },
  { id: '2', value: writable<number>(0) },
  { id: '3', value: writable<number>(0) },
  { id: '4', value: writable<number>(0) },
  { id: '5', value: writable<number>(0) },
  { id: '6', value: writable<number>(0) },
  { id: '7', value: writable<number>(0) },
  { id: '8', value: writable<number>(0) },
  { id: '9', value: writable<number>(0) },
  { id: '10', value: writable<number>(0) },
  { id: '11', value: writable<number>(0) },
  { id: '12', value: writable<number>(0) },
])

export default {
  subscribe: sliderArray.subscribe,
}

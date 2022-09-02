/// <reference types="svelte" />
/// <reference types="vite/client" />

// declare namespace svelte.JSX {
//   interface HTMLAttributes<T> {
//     onclick_outside: () => void
//   }
// }

declare namespace svelte.JSX {
  interface HTMLProps<T> {
    onpanup?: (event: any) => any;
    onpandown?: (event: any) => any;
    onpanstart?: (event: any) => any;
    ondoubletap?: (event: any) => any;
    ontap?: (event: any) => any;
    

  }
}


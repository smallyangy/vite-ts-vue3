/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '*.svg?component' {
    import { FunctionalComponent, SVGAttributes } from 'vue'
    const src: FunctionalComponent<SVGAttributes>
    export default src
}

interface ImportMetaEnv{
    VITE_APP_TEST_A:string
    VITE_APP_TEST_B:string
    VITE_APP_TITLE:string
  }

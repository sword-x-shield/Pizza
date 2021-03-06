declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module global {
  interface ImportMeta {
    env: Record<string, unknown>;
    globEager<T = unknown>(globPath: string): Record<string, T>;
  }
}


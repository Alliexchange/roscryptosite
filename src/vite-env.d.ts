/// <reference types="vite/client" />

// Markdown raw imports
declare module '*.md?raw' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly VITE_TG_USERNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/// <reference types="vite/client" />

interface ImportMetaEnv{
  readonly YYT_BASE_URL: string;
  readonly YYT_PORT: number;

}

interface ImportMeta{
  readonly env: ImportMetaEnv;
}
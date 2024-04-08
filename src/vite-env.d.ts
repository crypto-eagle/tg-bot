/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_SMART_CONTRACT: string;
    readonly VITE_TON_NETWORK: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

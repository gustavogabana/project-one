// strict mode for typescript
interface ViteTypeOptions {
    strictImportMetaEnv: true;
}

// defines the format/shape of the env variables
interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string;
}

// injects the envs into import.meta.env
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
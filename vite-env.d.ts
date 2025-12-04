// Manually define Vite types to avoid "Cannot find type definition file for 'vite/client'" error
interface ImportMetaEnv {
    readonly VITE_API_KEY: string;
    readonly BASE_URL: string;
    readonly MODE: string;
    readonly DEV: boolean;
    readonly PROD: boolean;
    readonly SSR: boolean;
    [key: string]: any;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
  // Define process.env to support the required API key usage guideline
  declare var process: {
    env: {
      API_KEY: string;
      [key: string]: string | undefined;
    }
  };
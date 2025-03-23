declare module '*.png' {
  const value: number;
  export default value;
}

declare module '*.svg' {
  const value: number;
  export default value;
}

declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        EXPO_PUBLIC_NORDIGEN_SECRET_ID: string;
        EXPO_PUBLIC_NORDIGEN_SECRET_KEY: string;
      }
    }
  }
}

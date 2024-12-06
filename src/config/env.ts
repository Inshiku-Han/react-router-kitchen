export const APP_TYPE: 'dogs' | 'cats' = import.meta.env.VITE_APP_TYPE;
export const APP_BASE_ROUTE = APP_TYPE === 'dogs' ? '/dogs' : '/cats';

export const APP_TYPE: 'dogs' | 'cats' = import.meta.env.VITE_APP_TYPE;
export const APP_BASE_ROUTE = APP_TYPE === 'dogs' ? '/dogs' : '/cats';
export const APP_TITLE = APP_TYPE === 'dogs' ? 'Dogs shop' : 'Cats shop';

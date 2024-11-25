import { reactRouter } from '@react-router/dev/vite';
import { cwd } from 'node:process';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), '');
  const port = env.PORT ? Number(env.PORT) : 3000;

  return {
    plugins: [
      env.NODE_ENV === 'test' ? undefined : reactRouter(),
      tsconfigPaths(),
    ],
    preview: {
      port,
    },
    server: {
      port,
    },
    test: {
      coverage: {
        all: true,
        exclude: ['**/__tests__/**', '/**/*.stories.{ts,tsx}'],
        include: ['app/components/**/*.{ts,tsx}', 'app/utils/**/*.{ts,tsx}'],
        reporter: ['text', 'json-summary', 'json'],
        reportOnFailure: true,
      },
      environment: 'jsdom',
      include: ['**/__tests__/**/*.spec.{ts,tsx}'],
      setupFiles: ['app/__tests__/setup.ts'],
    },
  };
});

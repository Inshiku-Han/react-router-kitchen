import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
  const isStaticBuild = command === 'build' && mode === 'static';
  const isSsrBuild = command === 'build' && mode === 'ssr';

  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT ? Number(env.PORT) : 3000;

  return {
    plugins: [
      env.NODE_ENV === 'test'
        ? undefined
        : reactRouter({
            appDirectory: 'src/app',
            prerender: isStaticBuild,
            ssr: isSsrBuild,
          }),
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
        exclude: ['**/__tests__/**', '/**/*.stories.{ts,tsx}', 'src/app/'],
        include: ['src/**/*.{ts,tsx}'],
        reporter: ['text', 'json-summary', 'json'],
        reportOnFailure: true,
      },
      environment: 'jsdom',
      include: ['**/__tests__/**/*.spec.{ts,tsx}'],
      setupFiles: ['src/__tests__/setup.ts'],
    },
  };
});

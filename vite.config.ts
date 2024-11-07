import { reactRouter } from '@react-router/dev/vite';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
  const isStaticBuild = command === 'build' && mode === 'static';
  const isSsrBuild = command === 'build' && mode === 'ssr';

  const env = loadEnv(mode, process.cwd(), '');

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
  };
});

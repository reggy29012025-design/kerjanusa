import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const backendTarget = env.VITE_PROXY_TARGET || 'http://localhost:8000';
  const frontendPort = Number(env.VITE_PORT || 5173);

  return {
    plugins: [react()],
    server: {
      port: frontendPort,
      host: 'localhost',
      strictPort: false,
      proxy: {
        '/api': {
          target: backendTarget,
          changeOrigin: true,
        },
      },
    },
  };
});

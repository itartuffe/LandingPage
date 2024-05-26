import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
const root = process.cwd();
const envDir = resolve(root, 'env');

export default defineConfig( ({ mode }) => {
  const env = loadEnv(mode, envDir, "YYT");
  return {
    base: env.YYT_BASE_URL,
    envDir,
    server: {
      port: Number(env.YYT_PORT),
    }
  }
})
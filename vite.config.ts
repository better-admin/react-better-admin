import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import mockDevServerPlugin from "vite-plugin-mock-dev-server";

export default defineConfig({
    plugins: [
        react(),
        mockDevServerPlugin(),
    ],

    server: {
        // 需在 proxy 中配置的代理前缀， mock-dev-server 才会拦截并进行 mock
        // 更多配置可参考 https://github.com/pengzhanbo/vite-plugin-mock-dev-server/blob/main/example/vite.config.ts
        proxy: {
            '^/api': {
                target: '',
            },
        },
    },
})
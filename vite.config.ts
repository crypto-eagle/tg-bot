import {fileURLToPath, URL} from "url";
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {nodePolyfills} from "vite-plugin-node-polyfills";
import eslint from 'vite-plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), nodePolyfills(), eslint()],
    resolve: {
        alias: [
            {find: '@core', replacement: fileURLToPath(new URL('./src/core', import.meta.url))},
            {find: '@hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url))},
        ],
    },
})

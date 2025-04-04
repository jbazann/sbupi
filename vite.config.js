import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    server: {
        host: '0.0.0.0',
        logLevel: 'debug'
    },
    plugins: [
        tailwindcss(),
        mkcert()
    ],
});
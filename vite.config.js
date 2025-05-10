import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
        vike(),
        mkcert({
            hosts: ['local.jbazann.dev', 'localhost'],
        })
    ],
    resolve: {
        alias: {
            "@": "/src",
            "@c": "/src/components/"
        },
    },
    server: {
        port: 443,
        host: ['local.jbazann.dev','localhost'],
        allowedHosts: ['localhost', '.jbazann.dev'],
        https: true,
    },
    preview: {
        port: 443,
        host: 'local.jbazann.dev',
        allowedHosts: ['localhost', '.jbazann.dev'],
        https: true,
    }
});
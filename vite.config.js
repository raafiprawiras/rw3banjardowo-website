import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    plugins: [tailwindcss()],
    resolve: {
        alias: {
            '@': import.meta.dirname + '/src',
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
});

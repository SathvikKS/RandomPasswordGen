import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import flowbiteReact from 'flowbite-react/plugin/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), flowbiteReact()],
    build: {
        // Enable code splitting for better performance
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate vendor chunks
                    vendor: ['react', 'react-dom'],
                    // Separate toast library
                    toast: ['react-toastify'],
                    // Separate flowbite components
                    ui: ['flowbite-react'],
                },
            },
        },
        // Enable minification
        minify: 'terser',
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-toastify', 'flowbite-react'],
    },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            manifest: {
                name: 'IT Subjects Reviewer',
                short_name: 'IT Reviewer',
                description: 'Interactive open-source study platform for IT students.',
                theme_color: '#0B0F14',
                background_color: '#0B0F14',
                display: 'standalone',
                icons: [
                    {
                        src: 'https://cdn-icons-png.flaticon.com/512/3242/3242257.png', // Temporary placeholder icon
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: './', // For GitHub Pages
});

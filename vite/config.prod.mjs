import { defineConfig } from 'vite';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';

const phasermsg = () => {
    return {
        name: 'phasermsg',
        buildStart() {
            process.stdout.write(`Building for production...\n`);
        },
        buildEnd() {
            const line = "---------------------------------------------------------";
            const msg = `❤️❤️❤️ Tell us about your game! - games@phaser.io ❤️❤️❤️`;
            process.stdout.write(`${line}\n${msg}\n${line}\n`);

            process.stdout.write(`✨ Done ✨\n`);
        }
    }
}

export default defineConfig({
    base: './',
    logLevel: 'warning',
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, '../index.html'),
                dino: path.resolve(__dirname, '../src/games/rescue/index.html'),
                asteroid: path.resolve(__dirname, '../src/games/evade/index.html'),
                champ: path.resolve(__dirname, '../src/games/dash/index.html'),
                leftOrRight: path.resolve(__dirname, '../src/games/left-or-right/index.html'),
                prototype: path.resolve(__dirname, '../src/games/prototype/index.html'),
                // weitere Spiele hier hinzufügen
            },
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                passes: 2
            },
            mangle: true,
            format: {
                comments: false
            }
        }
    },
    server: {
        port: 8080
    },
    plugins: [
        phasermsg(),
VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.mp3', '**/*.ogg', '**/*.json'],
            devOptions: {
                enabled: false
            },
            manifest: {
                name: 'Games',
                short_name: 'Games',
                description: 'Adfree Phaser3 PWA Free-To-Play Browsergames',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone',
                scope: '/',
                start_url: '/',
                orientation: 'any',
                icons: [
                    {
                        src: '/images/hero.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/images/hero.png',
                        sizes: '256x256',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/images/hero.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,gif,mp3,ogg,wav,json,woff,woff2,ttf}'],
                globIgnores: ['**/node_modules/**/*'],
                maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'gstatic-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxEntries: 100,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:mp3|ogg|wav)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'audio-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                            }
                        }
                    }
                ]
            }
        })
    ]
});
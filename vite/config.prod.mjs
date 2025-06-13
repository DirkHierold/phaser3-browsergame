import { defineConfig } from 'vite';
import path from 'path';

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
                asteroid: path.resolve(__dirname, '../src/games/asteroid/index.html'),
                champ: path.resolve(__dirname, '../src/games/champ/index.html'),
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
        phasermsg()
    ]
});
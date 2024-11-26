import { defineConfig } from '@tanstack/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { format } from 'date-fns';

export default defineConfig({
    server: {
        compatibilityDate: format(new Date(), 'yyyy-MM-dd') as any,
    },
    vite: {
        plugins: [
            viteTsConfigPaths({
                projects: ['./tsconfig.json'],
            }),
        ],
    },
});

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
  resolve: {
    alias: {
      data: path.resolve(__dirname, 'src/data/'),
      libs: path.resolve(__dirname, 'src/libs/'),
      common: path.resolve(__dirname, 'src/common/'),
      routes: path.resolve(__dirname, 'src/routes/'),
      store: path.resolve(__dirname, 'src/store/'),
      hooks: path.resolve(__dirname, 'src/ui/hooks/'),
      pages: path.resolve(__dirname, 'src/ui/pages/'),
      providers: path.resolve(__dirname, 'src/ui/providers/'),
      components: path.resolve(__dirname, 'src/ui/components/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  server: {
    open: true,
  },
});

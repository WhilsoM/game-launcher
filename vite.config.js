import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePluginGhPages } from 'vite-plugin-gh-pages'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [react(), VitePWA(), VitePluginGhPages()],
})

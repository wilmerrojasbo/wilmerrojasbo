import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  //site: 'https://wilmerrojasbo.github.io',
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  output: 'server',
  adapter: vercel()
})

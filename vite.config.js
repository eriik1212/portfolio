import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import es from './src/i18n/es.js'
import ca from './src/i18n/ca.js'
import en from './src/i18n/en.js'

const SITE = 'https://www.erik-mg.com'
const LOCALES = { es: 'es_ES', ca: 'ca_ES', en: 'en_GB' }
const DICTIONARIES = { es, ca, en }

// Link-preview crawlers don't run JavaScript, so each language gets its own
// static HTML (dist/es/index.html, ...) with the right lang, description and URLs.
function localizedHtml() {
  let outDir = 'dist'
  return {
    name: 'localized-html',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const base = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      for (const [lang, dict] of Object.entries(DICTIONARIES)) {
        const url = `${SITE}/${lang}`
        const description = dict.meta.description
        const html = base
          .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
          .replace(/(<meta name="description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${LOCALES[lang]}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
        mkdirSync(resolve(outDir, lang), { recursive: true })
        writeFileSync(resolve(outDir, lang, 'index.html'), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localizedHtml()],
})

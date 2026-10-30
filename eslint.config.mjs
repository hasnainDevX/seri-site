import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'node_modules/**', 'out/**', 'studio/node_modules/**', 'studio/dist/**', 'studio/.sanity/**']),
])

import { defineConfig } from 'drizzle-kit'
import { environment } from './src/environment'

export default defineConfig({
    schema: 'src/db/schema.ts',
    out: "./migrations",
    dialect: 'postgresql',
    dbCredentials: {
        url: environment.DATABASE_URL
    }
})
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { environment } from '../environment'

export const client = postgres(environment.DATABASE_URL)

export const db = drizzle(client, { schema, logger: true })
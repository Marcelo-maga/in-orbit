import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url()
})


export const environment = envSchema.parse(process.env)
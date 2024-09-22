import { PrismaClient } from '@prisma/client'

declare global {
	var client: PrismaClient | undefined
}

export const prisma = globalThis.client || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.client = prisma

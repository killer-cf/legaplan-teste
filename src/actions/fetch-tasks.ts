'use server'

import { prisma } from '@/lib/prisma'

export async function fetchTasks() {
	await new Promise((resolve) => setTimeout(resolve, 300))

	try {
		const tasks = await prisma.task.findMany()

		return {
			tasks,
		}
	} catch (error) {
		console.error(error)
		return {
			error: 'An error occurred while fetching the tasks',
		}
	}
}

'use server'

import { prisma } from '@/lib/prisma'

interface CreateTaskInput {
	name: string
}

export async function createTasks({ name }: CreateTaskInput) {
	try {
		await prisma.task.create({
			data: {
				name,
				finished: false,
			},
		})
	} catch (error) {
		console.error(error)
		return {
			error: 'An error occurred while creating the task',
		}
	}
}

'use server'

import { prisma } from '@/lib/prisma'

interface DeleteTaskInput {
	id: number
}

export async function deleteTask({ id }: DeleteTaskInput) {
	try {
		await prisma.task.delete({
			where: {
				id,
			},
		})
	} catch (error) {
		console.error(error)
		return {
			error: 'An error occurred while deleting the task.',
		}
	}
}

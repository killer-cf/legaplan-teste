'use server'

import { prisma } from '@/lib/prisma'

interface FinisheTaskInput {
	id: number
}

export async function finishTask({ id }: FinisheTaskInput) {
	try {
		await prisma.task.update({
			where: {
				id,
			},
			data: {
				finished: true,
			},
		})
	} catch (error) {
		console.error(error)
		return {
			error: 'An error occurred while finishing the task',
		}
	}
}

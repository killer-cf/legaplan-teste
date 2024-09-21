'use server'

import { prisma } from '@/lib/prisma'

interface UnfinishTaskInput {
	id: number
}

export async function unfinishTask({ id }: UnfinishTaskInput) {
	try {
		await prisma.task.update({
			where: {
				id,
			},
			data: {
				finished: false,
			},
		})
	} catch (error) {
		console.error(error)
		return {
			error: 'An error occurred while unfinishing the task',
		}
	}
}

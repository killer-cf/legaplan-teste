'use client'

import { useState } from 'react'
import styles from './index.module.scss'

import { createTask } from '@/actions/create-task'
import { Button } from '@/components/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createTaskFormData = z.object({
	name: z.string().min(1),
})

type TaskFomData = z.infer<typeof createTaskFormData>

export const NewTaskModal = () => {
	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm<TaskFomData>({
		resolver: zodResolver(createTaskFormData),
	})

	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)

	function handleClose() {
		setIsModalOpen(false)
	}

	const router = useRouter()

	async function handleAddTask({ name }: TaskFomData) {
		const result = await createTask({
			name,
		})

		if (result) {
			setIsModalOpen(false)
			router.refresh()
		}
	}

	return (
		<>
			<Button size="full" onClick={openModal}>
				Adicionar nova tarefa
			</Button>
			{isModalOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h2>Nova Tarefa</h2>
						<form onSubmit={handleSubmit(handleAddTask)}>
							<div className={styles.input}>
								<label htmlFor="taskName">Título</label>
								<input
									id="taskName"
									type="text"
									placeholder="Digite"
									{...register('name')}
								/>
							</div>
							<div className={styles.actions}>
								<Button color="secondary" onClick={handleClose}>
									Cancelar
								</Button>
								<Button type="submit" disabled={isSubmitting}>
									Adicionar
								</Button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	)
}

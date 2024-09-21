'use client'

import { Trash } from 'lucide-react'
import { useState } from 'react'
import styles from './index.module.scss'

import { deleteTask } from '@/actions/delete-task'
import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'

interface DeleteTaskModalProps {
	id: number
}

export const DeleteTaskModal = ({ id }: DeleteTaskModalProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)

	function handleClose() {
		setIsModalOpen(false)
	}

	const router = useRouter()

	async function handleDeleteTask() {
		const result = await deleteTask({ id })

		if (result?.error) {
			console.error(result.error)
		} else {
			setIsModalOpen(false)
			router.refresh()
		}
	}

	return (
		<>
			<button type="button" className={styles.delete} onClick={openModal}>
				<Trash />
			</button>
			{isModalOpen && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<h2>Deletar Tarefa</h2>
						<p>Tem certeza que você deseja deletar essa tarefa?</p>
						<div className={styles.actions}>
							<Button color="secondary" onClick={handleClose}>
								Cancelar
							</Button>
							<Button color="danger" onClick={handleDeleteTask}>
								Deletar
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

'use client'

import { Trash } from 'lucide-react'
import { useState } from 'react'
import styles from './index.module.scss'

import { Button } from '@/components/button'

export const DeleteTaskModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)

	function handleClose() {
		setIsModalOpen(false)
	}

	function handleAddTask() {
		console.log('deletar tarefa')
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
							<Button color="danger" onClick={handleAddTask}>
								Deletar
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

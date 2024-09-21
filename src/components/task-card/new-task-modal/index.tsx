'use client'

import { useState } from 'react'
import styles from './index.module.scss'

import { Button } from '@/components/button'

export const NewTaskModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => setIsModalOpen(true)

	function handleClose() {
		setIsModalOpen(false)
	}

	function handleAddTask() {
		console.log('Adicionando tarefa')
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
						<div className={styles.input}>
							<label htmlFor="taskName">Título</label>
							<input id="taskName" type="text" placeholder="Digite" />
						</div>
						<div className={styles.actions}>
							<Button color="secondary" onClick={handleClose}>
								Cancelar
							</Button>
							<Button onClick={handleAddTask}>Adicionar</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

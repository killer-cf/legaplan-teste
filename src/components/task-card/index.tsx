import type { Task as TaskDTO } from '@prisma/client'
import { Button } from '../button'
import styles from './index.module.scss'
import { Task } from './task'

interface Props {
	tasks: TaskDTO[]
}

export const TaskCard = ({ tasks }: Props) => {
	const fineshedTasks = tasks.filter((task) => task.finished)
	const unfinishedTasks = tasks.filter((task) => !task.finished)

	return (
		<>
			<div className={styles.card}>
				<h3>Suas tarefas de hoje</h3>
				<div className={styles.list}>
					{unfinishedTasks.map((task) => (
						<Task key={task.id} finished={task.finished} name={task.name} />
					))}

					{unfinishedTasks.length === 0 && (
						<p className={styles.empty}>Nenhuma tarefa para cadastrada</p>
					)}
				</div>

				{fineshedTasks?.length > 0 && (
					<>
						<h3>Tarefas finlizadas</h3>
						<div className={styles.list}>
							{fineshedTasks.map((task) => (
								<Task key={task.id} finished={task.finished} name={task.name} />
							))}
						</div>
					</>
				)}
			</div>
			<Button size="full">Adicionar nova tarefa</Button>
		</>
	)
}

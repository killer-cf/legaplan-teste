import { fetchTasks } from '@/actions/fetch-tasks'
import styles from './index.module.scss'
import { NewTaskModal } from './new-task-modal'
import { Task } from './task'

export const TaskCard = async () => {
	const { tasks } = await fetchTasks()

	if (!tasks) {
		return null
	}

	const fineshedTasks = tasks.filter((task) => task.finished)
	const unfinishedTasks = tasks.filter((task) => !task.finished)

	return (
		<>
			<div className={styles.card}>
				<h3>Suas tarefas de hoje</h3>
				<div className={styles.list}>
					{unfinishedTasks.map((task) => (
						<Task key={task.id} task={task} />
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
								<Task key={task.id} task={task} />
							))}
						</div>
					</>
				)}
			</div>
			<NewTaskModal />
		</>
	)
}

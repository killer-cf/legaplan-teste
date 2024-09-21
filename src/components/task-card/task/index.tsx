import type { Task as TaskDTO } from '@prisma/client'
import { Checkbox } from '../checkbox'
import { DeleteTaskModal } from '../delete-task-modal'
import styles from './index.module.scss'

type Props = {
	task: TaskDTO
}

export const Task = ({ task }: Props) => {
	return (
		<div className={styles.task}>
			<Checkbox checked={task.finished} label={task.name} />
			<DeleteTaskModal id={task.id} />
		</div>
	)
}

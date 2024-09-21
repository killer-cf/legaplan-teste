'use client'

import { finishTask } from '@/actions/finish-task'
import { unfinishTask } from '@/actions/unfinish-task'
import type { Task as TaskDTO } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { Checkbox } from '../checkbox'
import { DeleteTaskModal } from '../delete-task-modal'
import styles from './index.module.scss'

type Props = {
	task: TaskDTO
}

export const Task = ({ task }: Props) => {
	const router = useRouter()

	async function handleChange(isChecked: boolean) {
		const action = isChecked ? finishTask : unfinishTask
		const result = await action({ id: task.id })

		if (result?.error) {
			console.error(result.error)
		} else {
			router.refresh()
		}
	}

	return (
		<div className={styles.task}>
			<Checkbox
				checked={task.finished}
				label={task.name}
				onChange={handleChange}
			/>
			<DeleteTaskModal id={task.id} />
		</div>
	)
}

import { Checkbox } from '../checkbox'
import { DeleteTaskModal } from '../delete-task-modal'
import styles from './index.module.scss'

type Props = {
	name: string
	finished: boolean
}

export const Task = ({ name, finished }: Props) => {
	return (
		<div className={styles.task}>
			<Checkbox checked={finished} label={name} />
			<DeleteTaskModal />
		</div>
	)
}

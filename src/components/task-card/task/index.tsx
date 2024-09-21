import { Trash } from 'lucide-react'
import { Checkbox } from '../checkbox'
import styles from './index.module.scss'

type Props = {
	name: string
	finished: boolean
}

export const Task = ({ name, finished }: Props) => {
	return (
		<div className={styles.task}>
			<Checkbox checked={finished} label={name} />
			<button type="button" className={styles.delete}>
				<Trash />
			</button>
		</div>
	)
}

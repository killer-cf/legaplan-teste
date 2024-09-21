import styles from './index.module.scss'
import { Task } from './task'

export const TaskCard = (props: Props) => {
	return (
		<div className={styles.card}>
			<h3>Suas tarefas de hoje</h3>
			<div className={styles.list}>
				<Task finished={false} name={'Lavar o carro'} />
				<Task finished={false} name={'Ir academia'} />
			</div>

			<h3>Tarefas finlizadas</h3>
			<div className={styles.list}>
				<Task finished={true} name={'Lavar o carro'} />
				<Task finished={true} name={'Ir academia'} />
			</div>
		</div>
	)
}

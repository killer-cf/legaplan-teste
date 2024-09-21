import { Button } from '@/components/button'
import { Header } from '@/components/header'
import { TaskCard } from '@/components/task-card'
import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.content}>
				<TaskCard />
				<Button size="full">Adicionar nova tarefa</Button>
			</div>
		</main>
	)
}

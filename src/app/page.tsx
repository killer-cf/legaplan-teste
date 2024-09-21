import { fetchTasks } from '@/actions/fetch-tasks'
import { Header } from '@/components/header'
import { TaskCard } from '@/components/task-card'
import styles from './page.module.scss'

export default async function Home() {
  const { tasks } = await fetchTasks()

  if (!tasks) {
    return <div>loading...</div>
  }

	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.content}>
				<TaskCard tasks={tasks} />
			</div>
		</main>
	)
}

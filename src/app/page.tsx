import { Suspense } from 'react'
import styles from './page.module.scss'

import { Header } from '@/components/header'
import { TaskCard } from '@/components/task-card'
import { TaskCardSkeleton } from '@/components/task-card/skeleton'

export default async function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<div className={styles.content}>
				<Suspense fallback={<TaskCardSkeleton />}>
					<TaskCard />
				</Suspense>
			</div>
		</main>
	)
}

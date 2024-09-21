import styles from './index.module.scss'

export const TaskCardSkeleton = () => {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.header} />
				<div className={styles.list}>
					<div className={styles.task} />
					<div className={styles.task} />
				</div>
				<div className={styles.header} />
				<div className={styles.list}>
					<div className={styles.task} />
					<div className={styles.task} />
					<div className={styles.task} />
				</div>
			</div>
			<div className={styles.button} />
		</>
	)
}

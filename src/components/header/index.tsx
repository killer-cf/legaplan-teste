import Image from 'next/image'
import styles from './index.module.scss'

type Props = {}

export const Header = (props: Props) => {
	return (
		<header className={styles.container}>
			<div className={styles.logo}>
				<Image src="/logo.png" alt="logo" width={150} height={36} />
			</div>

			<h1>Bem-vindo de volta, Kilder</h1>

			<span>Segunda, 01 de dezembro de 2025</span>
		</header>
	)
}

import styles from './index.module.scss'

type ButtonProps = {
	children: React.ReactNode
	color?: 'primary' | 'danger'
	size?: 'medium' | 'full'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
	children,
	color = 'primary',
	size = 'medium',
	...props
}: ButtonProps) => {
	const buttonClass = `${styles.btn} ${styles[`btn_${color}`]} ${styles[`btn_${size}`]}`

	return (
		<button className={buttonClass} {...props}>
			{children}
		</button>
	)
}

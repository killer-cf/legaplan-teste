'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'
import styles from './index.module.scss'

export type CheckboxProps = {
	checked?: boolean
	onChange?: (isChecked: boolean) => void
	label?: string
}

export const Checkbox = ({
	checked: initialChecked = false,
	onChange,
	label,
}: CheckboxProps) => {
	const [isChecked, setIsChecked] = useState(initialChecked)

	const handleChange = () => {
		const newChecked = !isChecked
		setIsChecked(newChecked)
		if (onChange) {
			onChange(newChecked)
		}
	}

	return (
		<label className={styles.container}>
			<input type="checkbox" checked={isChecked} onChange={handleChange} />
			<span className={styles.checkbox}>
				{isChecked && <Check size={16} />}
			</span>
			{label && <span className={styles.label}>{label}</span>}
		</label>
	)
}

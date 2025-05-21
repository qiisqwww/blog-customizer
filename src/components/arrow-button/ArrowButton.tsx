import clsx from 'clsx';
import arrow from '../../../src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface ArrowButtonProps {
	open: boolean;
	setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const ArrowButton = ({ open, setOpen }: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<button
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={() => {
				setOpen((prev) => !prev);
			}}
			className={clsx(styles.container, open && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, open && styles.arrow_open)}
			/>
		</button>
	);
};

import clsx from "clsx";
import styles from './card.module.css';
import { FC } from "react";
import { CardProps } from "./card.types";
export const CardComponent: FC<CardProps> = ({title, description, icon, className, id}) => {

    return (
        <div className={clsx(styles['card'], styles['card--centered'], className)}>
            <section className={clsx(styles['card__icon'])}>
                {icon ?? ''}
            </section>
            <div className={clsx(styles['wrapper__copies'])}>
                <span className={clsx(styles['card__title'])}>{title}</span>
                <p className={styles['card__paragraph']}>{description}</p>
            </div>
        </div>
    )
}

export default CardComponent;
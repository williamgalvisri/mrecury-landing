import { copies } from "@/assets/utils/home.copy";
import clsx from "clsx";
import ButtonComponent from "../button/button";
import Image from 'next/image';
import HomeFirstImage from '@/assets/images/svg/home-first-image.svg';
import HomeSecondImage from '@/assets/images/svg/home-second-image.svg';
import styles from './home.module.css';
import triggerOnScreenRef from "@/hooks/trigger-on-screen-ref";
import { FC, useRef } from "react";

const CopyContainer_:FC<{active: boolean}> = ({active}) => {

    return (
        <section className={clsx(styles['home__copies-container'])}>
            <span className={clsx(styles['home__copies-container__title'], active ? 'fade-in' : '')}>
                {copies['Title']}
            </span>
            <span className={clsx(styles['home__copies-container__description'], active ? 'fade-in' : '')}>
                {copies['Description']}
            </span>
            <ButtonComponent className={active ? 'fade-in' : ''}> {copies['Button CTA']}</ButtonComponent>
        </section>
    )
}

const FigureContainer_:FC<{active: boolean}> = ({active}) => {

    return (
        <section className={styles['figure-container']}>
            <div className={styles['figure-wrapper']}>
                <Image
                    priority
                    className={clsx(styles['figure-wrapper__image1'], styles['figure-wrapper__image1--shadow'], active ? 'fade-in--up': '')}
                    src={HomeFirstImage}
                    alt="MercuryInc Image 2"
                />
                <Image
                    priority
                    className={clsx(styles['figure-wrapper__image1'],  active ? 'fade-in--up': '')}
                    src={HomeFirstImage}
                    alt="MercuryInc Image 1"
                />
                <Image
                    priority
                    className={clsx(styles['figure-wrapper__image2'], styles['figure-wrapper__image2--shadow'], active ? 'fade-in--up': '')}
                    src={HomeSecondImage}
                    alt="MercuryInc Image 2"
                />
                <Image
                    priority
                    className={clsx(styles['figure-wrapper__image2'],  active ? 'fade-in--up': '')}
                    src={HomeSecondImage}
                    alt="MercuryInc Image 2"
                />
            </div>
        </section>
    )
}


const HomeComponent = () => {
    const ref = useRef<any>();
    const {active} = triggerOnScreenRef({ref});
    return (
        <section ref={ref} className={clsx(styles['container'], 'container-zoom')}>
            <CopyContainer_ active={active} />
            <FigureContainer_ active={active} />
        </section>
    )
}

export default HomeComponent;
import Image from 'next/image';
import clsx from 'clsx';
import triggerOnScreenRef from '@/hooks/trigger-on-screen-ref';
import { useRef } from 'react';

import styles from './call-to-action.module.css';
import ButtonComponent from '../button/button';
import Background from '@/assets/images/svg/call-action-bg.svg';
import BackgroundMini from '@/assets/images/svg/call-action-bg-mini.svg';

const CallToActionComponent = () => {
    const ref = useRef<any>();
    const {active} = triggerOnScreenRef({ref});
    return (
        <section className={clsx(styles['container'], 'conainer-zoom')}>
            <div className={clsx(styles['container__bg'])}>
                <Image
                    ref={ref}
                    className={clsx(styles['container__bg__image'], 'fade-in')}
                    priority
                    src={Background}
                    alt="bg call to action"
                />
                <Image
                    ref={ref}
                    className={clsx(styles['container__bg__image-mini'], 'fade-in')}
                    priority
                    src={BackgroundMini}
                    alt="bg call to action mini"
                />
                <section className={clsx(styles['container__bg__pragraph'], active ? 'fade-in' : '')}>
                    <span className={styles['container__bg__title']}>¡Solicita una cotización hoy mismo!</span>
                    <ButtonComponent className={styles['container__bg__button']}> {'Contactenos'}</ButtonComponent>
                </section>
            </div>
        </section>
    )
}

export default CallToActionComponent;
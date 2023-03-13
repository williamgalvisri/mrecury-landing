import Image from 'next/image';
import LogoNavbar from '@/assets/images/svg/logo-navbar.svg'
import LogoIcon from '@/assets/icons/logo-icon.svg'
import styles from '@/components/navbar/navbar.module.css'
import clsx from 'clsx';

const Options_ = () => {
    return (
        <ul className={styles['container__menu']}>
            <li className={clsx(styles['container__menu__options'], styles['container__menu__options'])}>Productos</li>
            <li className={clsx(styles['container__menu__options'], styles['container__menu__options'])}>Galeria</li>
            <li className={clsx(styles['container__menu__options'], styles['container__menu__options'])}>Nosotros</li>
            <li className={clsx(styles['container__menu__options'], styles['container__menu__options'])}>Contactenos</li>
        </ul>            
    )
}
const NavBarComponent = () => {
    return (
        <>
            <nav className={clsx(styles['container-bgcolor'], styles['container--sticky'])}>
                <section className={clsx(styles['container'], 'container-zoom')}>
                    <figure className={styles['container__brand']}>
                        <Image
                            id="logotype"
                            className={styles['container__brand__logotype']}
                            priority
                            src={LogoNavbar}
                            alt="MercuryInc Brand"
                        />
                        <Image priority
                            id="icon"
                            className={styles['container__brand__icon']}
                            src={LogoIcon}
                            alt="MercuryInc Brand Icon" />
                    </figure>
                    <Options_/>
                </section>
            </nav>
        </>
    )
}

export default NavBarComponent
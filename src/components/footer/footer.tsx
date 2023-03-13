import clsx from "clsx";
import Image from 'next/image';

import styles from './footer.module.css';
import LogoCm3 from '@/assets/icons/logo-cm3.svg';
import Mail from '@/assets/icons/mail.svg';
import Phone from '@/assets/icons/phone.svg';
import Linkedin from '@/assets/icons/linkedin.svg';



const _FooterContactComponent = () => {

    return (
        <> 
            <section className={styles['contact-info']}>
                <div className={styles['contact-info__label']}>villa.neisser@gmail.com</div>
                <Image
                    id="footerlogo"
                    priority
                    src={Mail}
                    alt="Email"
                />
            </section>
            <section className={styles['contact-info']}>
                <div className={styles['contact-info__label']}>+57 302 456 8302</div>
                <Image
                    id="footerlogo"
                    priority
                    src={Phone}
                    alt="Phone"
                />
            </section>
            <section className={styles['contact-info']}>
                <div className={styles['contact-info__label']}>@mercuryinc</div>
                <Image
                    id="Linkedin"
                    priority
                    src={Linkedin}
                    alt="Linkedin"
                />
            </section>
        </>
    )
}


const FooterComponent = () => {
    return(
        <section className={clsx(styles['container'], 'container-zoom')}>
            <div className={clsx(styles['logo-section'])}>
                <Image
                    id="footerlogo"
                    priority
                    src={LogoCm3}
                    alt="MercuryInc Brand"
                />
            </div>
            <div className={clsx(styles['text-section-1'])}>
                © 2023 All Rights Reserved
            </div>
            <div className={clsx(styles['text-section-2'])}>
                Calidad, Durabilidad y Estética: los pilares de 
                <br />
                nuestros productos de PVC
            </div>
            <div className={clsx(styles['text-section-3'])}>
                <_FooterContactComponent />
            </div>
        </section>
    )
}

export default FooterComponent;
import { copies } from "@/assets/utils/real-space.copy";
import clsx from "clsx";
import Image from 'next/image';

import styles from './real-space.module.css';
import RealSpaceImage1 from "@/assets/images/svg/real-space-image1.svg";
import RealSpaceImage2 from "@/assets/images/svg/real-space-image2.svg";
import RealSpaceImage3 from "@/assets/images/svg/real-space-image3.svg";
import RealSpaceImage4 from "@/assets/images/svg/real-space-image4.svg";
import RealSpaceImage5 from "@/assets/images/svg/real-space-image5.svg";
import { useRef } from "react";
import triggerOnScreenRef from "@/hooks/trigger-on-screen-ref";

const RealSpaceComponent = () => {
    const ref = useRef<any>();
    const {active} = triggerOnScreenRef({ref});
    return (
        <section className={clsx('container-zoom', styles['container'])}>
            <span className={styles['container__title']}>{copies['Real Spaces']['Title']}</span>
            <div ref={ref} className={styles['container__grid-image']}>
                <div className={clsx(styles['grid-image__image1'], active ? 'fall-object' : '')}>
                    <div></div>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={RealSpaceImage1}
                        alt="Product 1"
                    />
                </div>
                <div className={clsx(styles['grid-image__image2'], active ? 'fall-object' : '')}>
                    <div></div>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={RealSpaceImage2}
                        alt="Product 1"
                    />
                </div>
                <div className={clsx(styles['grid-image__image3'], active ? 'fall-object' : '')}>
                    <div></div>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={RealSpaceImage3}
                        alt="Product 1"
                    />
                </div>
                <div className={clsx(styles['grid-image__image4'], active ? 'fall-object' : '')}>
                    <div></div>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={RealSpaceImage4}
                        alt="Product 1"
                    />
                </div>
                <div className={clsx(styles['grid-image__image5'], active ? 'fall-object' : '')}>
                    <div></div>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={RealSpaceImage5}
                        alt="Product 1"
                    />
                </div>
            </div>
        </section>
    )
}

export default RealSpaceComponent;
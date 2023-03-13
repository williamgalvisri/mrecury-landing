import clsx from "clsx";
import Image from 'next/image';

import { copies } from "@/assets/utils/products.copy";
import styles from './products.module.css';
import Products1 from '@/assets/images/svg/products1-image.svg'
import Products2 from '@/assets/images/svg/products2-image.svg'
import Products3 from '@/assets/images/svg/products3-image.svg'
import ButtonComponent from "../button/button";
const ProductsComponent = () => {

    return (
        <section className={clsx('container-zoom', styles['container'])}>
            <span className={styles['container__title']}>{copies['Products']['Title']}</span>
            <p className={styles['container__paragraph']}>
                {copies['Products']['Description']}
            </p>

            <div className={styles['container__products']}>
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={Products1}
                        alt="Product 1"
                    />
                    <Image
                        className={styles['container__product--shapper']}
                        priority
                        src={Products2}
                        alt="Product 2"
                    />
                    <Image
                        priority
                        className={styles['container__product--shapper']}
                        src={Products3}
                        alt="Product 3"
                    />
            </div>
            <ButtonComponent className={styles['container__products__button']}> {copies['Products']['Button Show More']}</ButtonComponent>
        </section>
    )
}

export default ProductsComponent;
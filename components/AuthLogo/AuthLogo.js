import React from 'react';
import Link from "next/link";
import styles from './AuthLogo.module.sass'

const AuthLogo = props => {
    return (
        <Link href='/'>
            <a className={styles.logoContainer}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={!props.nextPage ? styles.blueSVG : styles.whiteSVG} d="M2.66669 10.4449V24.7753H5.58803V14.0882L22.1423 22.8322V25.504L16.5431 28.4187L10.9438 25.504V21.132H8.50937V26.4756L16.5431 31.3333L24.5768 26.4756V21.132L5.34458 10.4449H2.66669Z" fill='white'/>
                    <path className={!props.nextPage ? styles.blueSVG : styles.whiteSVG} d="M23.9776 4.61488V7.56087L21.2997 9.22977V5.82933L15.9439 3.15755L10.5881 6.07222V8.01533L21.2997 13.8447L26.6555 10.6871H29.3334V25.0175H26.6555V14.3304L21.2997 17.2451L7.66675 9.22977V4.61488L15.9439 0L23.9776 4.61488Z" fill='white'/>
                </svg>
                <h1 className={!props.nextPage ? styles.blue : styles.white}>Smart menu</h1>
            </a>
        </Link>
    );
};

export default AuthLogo;
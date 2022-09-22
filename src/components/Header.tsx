import React from 'react';
import styles from './header.module.scss'

type Header = {
    black: boolean;
}

export default ({black}:Header) => {
    /* A propriedade black define se esta função deverá ou não,
    mudar sua transparência na página 
    - Container 1 -> Logo
    - Container 2 -> Avatar
    */
    return (
        <header className={black ? styles.black : ''}>
            <div className={styles.containerLogo}> 
                <a href='/'>
                    <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt="Netflix-Logo"></img>
                </a>
            </div>
            <div className={styles.containerUser}> 
                <a href='/'>
                    <img src="https://occ-0-4370-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYTt3Ag0kwDhSmO3AT2sD4mfkoAO8fZsxfDgLKDU4zEKtQR6Ppk2Vfl6UsaI8I3hYjdnenK3F4IMju7VQqTQCbg1SIQt.png" alt='Avatar'></img>
                </a>
            </div>
        </header>
    )
}


import React from 'react'
import styles from '../styles/Components/Footer.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg'



const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <Dogs/>
            <p>Dogs. Direitos Reservados</p>
        </footer>
    )
}

export default Footer

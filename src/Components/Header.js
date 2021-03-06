import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Components/Header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <nav className='container'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login / Criar</Link>
            </nav>


        </div>
    )
}

export default Header

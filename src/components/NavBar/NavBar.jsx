import React from 'react'
import styles from './NavBar.module.css';

const NavBar = ({ menuItems, activeItem }) => {
    return (
        <nav className={styles.navbar}> {
            menuItems.map((item, index) => (
                <div key={index}
                    className={styles.navbar}
                >
                </div>
            ))}
        </nav>
    )
}

export default NavBar
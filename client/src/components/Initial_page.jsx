import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './initial_page.module.css'

const Initial_page= (props)=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.containerButton}>
                    <NavLink to="/videogames/all" className={styles.button}>Home</NavLink>
                </div>
            </div>
        </>
    )
}

export default Initial_page;
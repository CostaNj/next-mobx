import React from 'react'

import styles from 'bootstrap/dist/css/bootstrap.min.css'

export const ResumeView = ({ resume }) => (
    <div className={styles.container}>
        <ul className={styles.listGroup}>
            <li className={styles.listGroupItem}>
                {`Имя: ${resume.name}`}
            </li>
            <li className={styles.listGroupItem}>
                {`Фамилия: ${resume.lastname}`}
            </li>
            <li className={styles.listGroupItem}>
                {`Возраст: ${resume.age}`}
            </li>
        </ul>
    </div>
)

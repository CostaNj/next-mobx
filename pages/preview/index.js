import React, { useCallback } from 'react'
import cn from 'classnames'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'

import styles from 'bootstrap/dist/css/bootstrap.min.css'

const Preview = ({ store }) => {

    const handleBackClick = useCallback(() => {
        Router.push('/')
    }, [])

    return (
        <div className={styles.container}>
            <ul className={styles.listGroup}>
                <li className={styles.listGroupItem}>
                    {`Имя: ${store.name}`}
                </li>
                <li className={styles.listGroupItem}>
                    {`Фамилия: ${store.lastname}`}
                </li>
                <li className={styles.listGroupItem}>
                    {`Возраст: ${store.age}`}
                </li>
            </ul>
            <button onClick={handleBackClick} className={cn(styles.btn, styles.btnSecondary)}>
                Редактировать
            </button>
            <button onClick={handleBackClick} className={cn(styles.btn, styles.btnPrimary)}>
                Сохранить
            </button>
        </div>
    )
}

export default inject('store')(observer(Preview))
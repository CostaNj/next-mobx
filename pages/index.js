import React, { useCallback } from 'react'
import Router from 'next/router'
import { observer, inject } from 'mobx-react'
import cn from 'classnames'
import { Formik } from 'formik'

import styles from 'bootstrap/dist/css/bootstrap.min.css'
import myStyles from './style.css'

const Home = ({ store }) => {

    const handleSubmit = useCallback((values) => {
        store.updateStore(values)
        Router.push('/preview')
    }, [])

    const handleRules = useCallback((values) => {
        let errors = {}

        if(!values.name) {
            errors.name = 'Обязательное поле'
        } else if (!/^[a-zA-Zа-яА-я]+$/.test(values.name)) {
            errors.name = 'Необходимо ввести буквы'
        }

        if(!values.lastname) {
            errors.lastname = 'Обязательное поле'
        } else if (!/^[a-zA-Zа-яА-Я]+$/.test(values.lastname)) {
            errors.lastname = 'Необходимо ввести буквы'
        }

        if(!values.age) {
            errors.age = 'Обязательное поле'
        } else if (!/^[\d]+$/.test(values.age)) {
            errors.age = 'Необходимо ввести число'
        }

        return errors
    }, [])

    const formikInitialValues = {
        name: store.name,
        lastname: store.lastname,
        age: store.age
    }
    return (
        <>
            <Formik
                initialValues={formikInitialValues}
                validate={handleRules}
                onSubmit={handleSubmit}
            >
                {
                    ({
                         errors,
                         values,
                         handleSubmit,
                         handleChange,
                         isSubmitting,
                         handleBlur,
                         touched
                     }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Имя</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.formControl}
                                />
                                { errors.name && touched.name && <div style={{color: 'red'}}>{ errors.name }</div>}
                            </div>
                            <br/>
                            <div>
                                <label>Фамилия</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Фамилия"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.formControl}
                                />
                                { errors.lastname && touched.lastname && <div style={{color: 'red'}}>{ errors.lastname }</div>}
                            </div>
                            <br/>
                            <div>
                                <label>Возраст</label>
                                <input
                                    type="text"
                                    name="age"
                                    placeholder="Возраст"
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.formControl}
                                />
                                { errors.age && touched.age && <div style={{color: 'red'}}>{ errors.age }</div>}
                            </div>
                            <br/>
                            <div className={myStyles.btnContainer}>
                                <button
                                    className={cn(styles.btn, styles.btnPrimary, myStyles.btnOffset)}
                                    type="submit"
                                >
                                    Превью
                                </button>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </>
    )
}

export default inject('store')(observer(Home))
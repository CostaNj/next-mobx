import React, { useCallback } from 'react'
import Router from 'next/router'
import cn from 'classnames'
import { Formik } from 'formik'
import styles from 'bootstrap/dist/css/bootstrap.min.css'

export default () => {

    const handleSubmit = useCallback((values, actions) => {
        console.log(values, actions)
        // Router.push('/preview')
    }, [])

    const handleRules = useCallback((values) => {
        let errors = {}

        if(!values.name) {
            errors.name = 'Required'
        }

        if(!values.lastname) {
            errors.lastname = 'Required'
        }

        if(!values.age) {
            errors.age = 'Required'
        }

        return errors
    }, [])


    return (
        <div className={styles.container}>
            <Formik
                initialValues={{ name:'', lastname:'', age:''}}
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

                            <button
                                className={cn(styles.btn, styles.btnPrimary)}
                                type="submit"
                            >
                                Preview
                            </button>
                        </form>
                    )
                }
            </Formik>
        </div>
    )
}
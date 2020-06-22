import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import _ from 'lodash'
import axios from 'axios'
import Router from 'next/router'
import { inject, observer } from 'mobx-react'
import { ResumeView } from '../../components'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig()

import styles from 'bootstrap/dist/css/bootstrap.min.css'
import myStyles from '../style.css'

const Preview = ({ store }) => {

    const [isSaving, setSaving] = useState(false)
    const [savingInfo, setSavingInfo] = useState(null)
    const [isFailed, setFailed] = useState(false)

    const handleBackClick = useCallback(() => {
        Router.push('/')
    }, [])

    const handleSaveClick = useCallback(() => {
        setSaving(true)
        setFailed(false)
        setSavingInfo(null)
        axios({
            method: 'POST',
            url: '/api/v1/addresume',
            data: JSON.stringify(store),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setSaving(false)
                console.log(response)
                setSavingInfo(response.data)
            })
            .catch((err)=>{
                setFailed(true)
            })
    }, [])

    if(isFailed) {
        return(
            <div className={cn(styles.alert, styles.alertDanger)}>
                Не удалось сохранить резюме!
            </div>
        )
    }

    if(!_.isNil(savingInfo) && !_.isEmpty(savingInfo) && savingInfo._id) {
        return (
            <div className={cn(styles.alert, styles.alertSuccess)}>
                <p>Ваше резюме доступно по адресу:</p>
                <Link href={`/resume/${savingInfo._id }`}>
                    <a>{`${publicRuntimeConfig.base_url}/resume/${savingInfo._id}`}</a>
                </Link>
            </div>
        )
    }

    return (
        <>
            <ResumeView resume={store}/>
            <div className={myStyles.btnContainer}>
                <button
                    onClick={handleBackClick}
                    className={cn(styles.btn, styles.btnSecondary, myStyles.btnOffset)}
                >
                    Редактировать
                </button>
                <button
                    onClick={handleSaveClick}
                    className={cn(styles.btn, styles.btnPrimary, myStyles.btnOffset)}
                    disabled={isSaving}
                >
                    Сохранить
                </button>
            </div>
        </>
    )
}

export default inject('store')(observer(Preview))
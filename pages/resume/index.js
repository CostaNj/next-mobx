import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig()

import styles from 'bootstrap/dist/css/bootstrap.min.css'

const Resume = (props) => _.isNil(props.resume) || _.isEmpty(props.resume) ?

    <div className={cn(styles.alert, styles.alertDanger)}>
        Резюме с таким id не найдено!
    </div>
    :
    <div>
        <div>Имя: {props.resume.name}</div>
        <div>Фамилия: {props.resume.lastname}</div>
        <div>Возраст: {props.resume.age}</div>
    </div>

Resume.getInitialProps = async ({ query }) => {
    let resume
    let baseUrl = publicRuntimeConfig.base_url
    try {
        const response = await axios.get(`${baseUrl}/api/v1/findresume/${query.resumeId}`)
        resume = response.data
    } catch(err) {

    }
    return { resume }
}

export default Resume
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig()

import styles from 'bootstrap/dist/css/bootstrap.min.css'
import { ResumeView } from '../../components/resume-view'

const Resume = ({ resume }) => _.isNil(resume) || _.isEmpty(resume) ?

    <div className={cn(styles.alert, styles.alertDanger)}>
        Резюме с таким id не найдено!
    </div>
    :
    <ResumeView resume={resume}/>

Resume.getInitialProps = async ({ query }) => {
    let resume
    let baseUrl = publicRuntimeConfig.base_url
    console.log(baseUrl)
    try {
        const response = await axios.get(`${baseUrl}/api/v1/findresume/${query.resumeId}`)
        resume = response.data
        console.log(resume)
    } catch(err) {
        console.error(err)
    }
    return { resume }
}

export default Resume
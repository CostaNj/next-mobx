import React from 'react'
import cn from 'classnames'

import styles from 'bootstrap/dist/css/bootstrap.min.css'
import layoutStyles from './layout.module.css'

export const Layout = ({ children }) => (
    <div className={cn(styles.container, layoutStyles.layoutOffset)}>
        {children}
    </div>
)
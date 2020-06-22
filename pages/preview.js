import React, { useCallback } from 'react'
import Router from 'next/router'
import { Button } from 'reactstrap'

export default () => {

    const handleBackClick = useCallback(() => {
        Router.push('/')
    }, [])

    return (
        <Button onClick={handleBackClick}>Back</Button>
    )
}
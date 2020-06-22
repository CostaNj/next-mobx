import React, { useCallback } from 'react'
import Router from 'next/router'
import { Button } from 'reactstrap'

export default () => {

    const handlePreviewClick = useCallback(() => {
        Router.push('/preview')
    }, [])

    return (
        <Button onClick={handlePreviewClick} color="primary">Preview</Button>
    )
}
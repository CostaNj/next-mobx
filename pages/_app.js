import App from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import { store } from '../store'

import { Layout } from '../components'

const MyApp = ({ Component, pageProps }) =>  (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
);

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)

    return {
        ...appProps
    }
}

export default MyApp

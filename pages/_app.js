import App from 'next/app'
import React from 'react'
import { Provider } from 'mobx-react'
import { store } from '../store'

const MyApp = ({ Component, pageProps }) =>  (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext)

    return {
        ...appProps
    }
}

export default MyApp

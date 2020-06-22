import React from 'react'
import NextApp from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}


App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  return { ...appProps }
}

export default App
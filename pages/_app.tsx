/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import '../styles/globals.css'
import '../styles/styles.css'
import 'rsuite/dist/rsuite.min.css'

export default function MyApp(props): ReactElement {
    const { Component, pageProps } = props
    return (
        <>
            <Head>
                <title>Financial Tool</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

MyApp.getInitialProps = async (ctx): Promise<Record<string, string>> => {
    const pageProps = await App.getInitialProps(ctx)

    return {
        ...pageProps,
    }
}

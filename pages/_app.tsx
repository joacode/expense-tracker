/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head'
import React, { ReactElement } from 'react'
import '../styles/globals.css'

export default function MyApp(props): ReactElement {
    const { Component, pageProps } = props
    return (
        <>
            <Head>
                <title>Financial Tool</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

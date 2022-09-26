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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link href="/styles/styles.css" rel="preload" as="style" />
                <noscript>
                    <link rel="stylesheet" href="/styles/styles.css" />
                </noscript>
                <link href="/styles/globals.css" rel="preload" as="style" />
                <noscript>
                    <link rel="stylesheet" href="/styles/globals.css" />
                </noscript>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png" />
                <link
                    href="/_next/static/css/pages/_app.css?v5.17.0"
                    rel="preload"
                    as="style"
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="/_next/static/css/pages/_app.css?v5.17.0"
                    />
                </noscript>
                <meta name="theme-color" content="#fff" />
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

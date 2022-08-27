import React, { ReactElement } from 'react'
import '../styles/globals.css'

export default function MyApp(props): ReactElement {
    const { Component, pageProps } = props

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />
}

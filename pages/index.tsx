import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import Layout from 'src/components/UI/Layout/Layout'

export default function Home(): ReactElement {
    const router = useRouter()

    useEffect(() => {
        router.push('/records')
    }, [])

    return <Layout />
}

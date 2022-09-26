import React, { FC, ReactElement } from 'react'
import Layout from '../../src/components/UI/Layout/Layout'
import RecordDetail from '../../src/components/RecordDetail'

const RecordPage: FC = (): ReactElement => {
    return (
        <Layout>
            <RecordDetail />
        </Layout>
    )
}

export default RecordPage

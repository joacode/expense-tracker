import React, { ReactElement } from 'react'
import Layout from 'src/components/UI/Layout/Layout'
import RecordsTable from 'src/components/RecordsTable'

export const records = (): ReactElement => {
    return (
        <Layout>
            <RecordsTable />
        </Layout>
    )
}

export default records

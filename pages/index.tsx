import React, { ReactElement, useEffect, useState } from 'react'
import { Alert } from 'rsuite'
import { RecordInterface } from 'src/models/record'
import { RecordsService } from 'src/services/recordsService'

export default function Home(): ReactElement {
    const [records, setRecords] = useState<RecordInterface[]>([])

    const handleInsert = (): void => {
        const r = { title: 'tttt', amount: 800 }
        RecordsService.create(r)
            .then(() => {
                setRecords([...records, r])
            })
            .catch(() => {
                Alert.error('There was an error adding the record')
            })
    }

    useEffect(() => {
        RecordsService.find()
            .then(response => {
                setRecords(response)
            })
            .catch(() => {
                Alert.error('There was an error fetching the records')
            })
    }, [])

    return (
        <div>
            <button type="button" onClick={handleInsert}>
                insert
            </button>
            <div>
                {records.map(record => {
                    return (
                        <div>
                            {record.title}: {record.amount}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

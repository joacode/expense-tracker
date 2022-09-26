import React, { FC, ReactElement, useState } from 'react'
import { DatePicker, Input } from 'rsuite'
import styled from 'styled-components'
import Button from './Button'
import { RecordFilter, RecordInterface } from '../../models/record'

const Container = styled.div`
    margin: 10px;
    display: inline-block;
`

interface Props {
    records: RecordInterface[]
    filteredRecords: RecordInterface[]
    setFilteredRecords: (r: RecordInterface[]) => void
}

const RecordsFilter: FC<Props> = ({
    records,
    filteredRecords,
    setFilteredRecords,
}): ReactElement => {
    const [filters, setFilters] = useState<RecordFilter>(undefined)

    const onChangeTitleFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, title: value }))
    }

    const onChangeAmountFilter = (value: string): void => {
        setFilters(prevState => ({ ...prevState, amount: parseFloat(value) }))
    }

    const onChangeDateFilter = (date: Date): void => {
        setFilters(prevState => ({ ...prevState, date: date.toString() }))
    }

    const filterRecords = (): void => {
        let fRecords = filteredRecords

        if (filters?.title) {
            fRecords = fRecords.filter(r => r.title === filters.title)
        }
        if (filters?.amount) {
            fRecords = fRecords.filter(r => r.amount === filters.amount)
        }
        if (filters?.date) {
            fRecords = fRecords.filter(r => r.date === filters.date)
        }

        setFilteredRecords(fRecords)
    }

    const clearFilters = (): void => {
        setFilteredRecords(records)
        setFilters(null)
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <Container>
                <span>Title: </span>
                <Input
                    style={{
                        width: '100px',
                        display: 'inline-block',
                    }}
                    onChange={onChangeTitleFilter}
                />
            </Container>
            <Container>
                <span>Amount: </span>
                <Input
                    style={{
                        width: '100px',
                        display: 'inline-block',
                    }}
                    onChange={onChangeAmountFilter}
                />
            </Container>
            <Container>
                <span>Date: </span>
                <DatePicker
                    style={{ width: 170 }}
                    onSelect={onChangeDateFilter}
                    oneTap
                    format="yyyy-MM-dd"
                    placeholder="Select Date:"
                />
            </Container>
            <Button
                appearance="primary"
                style={{ margin: '10px' }}
                onClick={filterRecords}
            >
                Filter
            </Button>
            <Button appearance="ghost" onClick={clearFilters}>
                Clear Filters
            </Button>
        </div>
    )
}

export default RecordsFilter

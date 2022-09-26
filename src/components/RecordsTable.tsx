import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Grid, Message, Table, toaster } from 'rsuite'
import { RecordInterface } from 'src/models/record'
import { RecordsService } from 'src/services/recordsService'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Loading } from './UI/Layout/Loading'
import RecordsActions from './UI/RecordsActions'
import DeleteRecordModal from './Modals/DeleteRecordModal'
import { addRecordMessage } from './UI/message'

const { Column, HeaderCell, Cell } = Table

const Container = styled.div``

const ActionContainer = styled.span`
    cursor: pointer;
`

const RecordsTable: FC = (): ReactElement => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [records, setRecords] = useState<RecordInterface[]>([])
    const [filteredRecords, setFilteredRecords] = useState<RecordInterface[]>(
        []
    )
    const [showDeleteRecordModal, setShowDeleteRecordModal] = useState(false)
    const [deleteId, setDeleteId] = useState<number>(null)

    const onRowClick = (id: number, edit?: boolean): void => {
        if (edit) {
            router.push(`/${id}/edit`)
        } else {
            router.push(`/${id}`)
        }
    }

    const onDelete = (recordId: number): void => {
        RecordsService.delete(recordId)
            .then(() => addRecordMessage('success'))
            .catch(() => addRecordMessage('error'))
            .finally(() => {
                router.reload()
            })
    }

    useEffect(() => {
        setLoading(true)
        RecordsService.find()
            .then(response => {
                setRecords(response)
                setFilteredRecords(response)
            })
            .catch(() => {
                toaster.push(
                    <Message type="error">
                        There was an error fetching the records
                    </Message>
                )
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loading label="Fetching records..." />
    }

    return (
        <Container>
            <RecordsActions
                records={records}
                filteredRecords={filteredRecords}
                setFilteredRecords={setFilteredRecords}
            />
            <Grid style={{ width: 'fit-content' }}>
                <Table
                    autoHeight
                    width={600}
                    data={filteredRecords}
                    onRowClick={(rowData): void => {
                        // eslint-disable-next-line no-underscore-dangle
                        onRowClick(rowData._id)
                    }}
                >
                    <Column width={150}>
                        <HeaderCell>Title</HeaderCell>
                        <Cell dataKey="title" />
                    </Column>

                    <Column width={150}>
                        <HeaderCell>Detail</HeaderCell>
                        <Cell dataKey="detail" />
                    </Column>

                    <Column width={100}>
                        <HeaderCell>Amount</HeaderCell>
                        <Cell dataKey="amount" />
                    </Column>

                    <Column width={110}>
                        <HeaderCell>Date</HeaderCell>
                        <Cell dataKey="date">
                            {(rowData): ReactElement => {
                                return (
                                    rowData?.date?.slice(
                                        0,
                                        rowData?.date.indexOf('T')
                                    ) || ''
                                )
                            }}
                        </Cell>
                    </Column>

                    <Column width={80}>
                        <HeaderCell>Actions</HeaderCell>
                        <Cell>
                            {(rowData): ReactElement => (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                                <>
                                    {' '}
                                    <ActionContainer
                                        onClick={(
                                            e: React.MouseEvent
                                        ): void => {
                                            e.stopPropagation()
                                            // eslint-disable-next-line no-underscore-dangle
                                            onRowClick(rowData._id, true)
                                        }}
                                    >
                                        Edit
                                    </ActionContainer>
                                    <ActionContainer
                                        onClick={(
                                            e: React.MouseEvent
                                        ): void => {
                                            e.stopPropagation()
                                            // eslint-disable-next-line no-underscore-dangle
                                            setDeleteId(rowData._id)
                                            setShowDeleteRecordModal(true)
                                        }}
                                    >
                                        Delete
                                    </ActionContainer>
                                </>
                            )}
                        </Cell>
                    </Column>
                </Table>
            </Grid>
            {showDeleteRecordModal && (
                <DeleteRecordModal
                    open={showDeleteRecordModal}
                    onClose={(): void => setShowDeleteRecordModal(false)}
                    onSubmit={(): void => onDelete(deleteId)}
                />
            )}
        </Container>
    )
}

export default RecordsTable
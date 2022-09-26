import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { DatePicker, Grid as StyledGrid } from 'rsuite'
// eslint-disable-next-line import/no-extraneous-dependencies
import EditIcon from '@rsuite/icons/Edit'
import { RecordsService } from '../services/recordsService'
import { RecordInterface, RecordUpdateRequest } from '../models/record'
import Button from './UI/Button'
import { Loading } from './UI/Layout/Loading'
import { fetchRecordMessage, updateRecordMessage } from './UI/message'
import Title from './UI/Title'
import ItemDetail from './UI/ItemDetail'
import Box from './UI/Box'
import InputItem from './UI/InputItem'

const Grid = styled(StyledGrid)`
    height: 100%;
`

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`

interface Props {
    edit?: boolean
}

const Detail: FC<Props> = ({ edit = false }): ReactElement => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [record, setRecord] = useState<RecordInterface>(null)

    const handleEdit = (): void => {
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        router.push(`/${record._id}/edit`)
    }

    const titleChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            title: value,
        }))
    }

    const detailChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            detail: value,
        }))
    }

    const amountChange = (value: string): void => {
        setRecord(prevState => ({
            ...prevState,
            amount: parseFloat(value),
        }))
    }

    const dateChange = (date: Date): void => {
        setRecord(prevState => ({
            ...prevState,
            date: date.toString(),
        }))
    }

    const checkAndSubmit = (e: React.MouseEvent): void => {
        e.stopPropagation()
        if (record.title !== '' && !Number.isNaN(record.amount)) {
            setLoading(true)
            RecordsService.update(record as RecordUpdateRequest)
                .then(() => updateRecordMessage('success'))
                .catch(() => updateRecordMessage('error'))
                .finally(() => {
                    setLoading(false)
                    router.push('/records')
                })
        }
    }

    useEffect((): void => {
        setLoading(true)
        RecordsService.findById(router.query.id)
            .then(setRecord)
            .catch(() => fetchRecordMessage('error'))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loading label="Handling request..." />
    }

    return (
        <Box width="fit-content">
            <Grid style={{ width: 400 }}>
                <Title>
                    <span>
                        {record?.title}
                        {!edit && (
                            <EditIcon
                                width="30px"
                                style={{ marginLeft: 20, cursor: 'pointer' }}
                                onClick={handleEdit}
                            />
                        )}
                    </span>
                </Title>
                {record && (
                    <>
                        <InputItem
                            label="Title:"
                            onChange={titleChange}
                            defaultValue={record.title}
                            edit={edit}
                        />
                        <InputItem
                            label="Detail:"
                            onChange={detailChange}
                            defaultValue={record.detail}
                            edit={edit}
                        />
                        <InputItem
                            label="Amount:"
                            onChange={amountChange}
                            defaultValue={record.amount}
                            edit={edit}
                        />
                        <Container>
                            <ItemDetail bolder>Date:</ItemDetail>
                            {edit ? (
                                <DatePicker
                                    placeholder="Select Date"
                                    style={{ width: 170 }}
                                    onSelect={dateChange}
                                    readOnly={!edit}
                                    oneTap
                                    format="yyyy-MM-dd"
                                />
                            ) : (
                                <ItemDetail>
                                    {record?.date?.slice(
                                        0,
                                        record?.date?.indexOf('T')
                                    )}
                                </ItemDetail>
                            )}
                        </Container>
                        {edit && (
                            <Container
                                style={{
                                    borderBottom: 'none',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button
                                    appearance="primary"
                                    onClick={(e: React.MouseEvent): void =>
                                        checkAndSubmit(e)
                                    }
                                >
                                    Submit
                                </Button>
                            </Container>
                        )}
                    </>
                )}
            </Grid>
        </Box>
    )
}

export default Detail

Detail.defaultProps = {
    edit: false,
}

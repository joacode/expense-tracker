import React, { FC, ReactElement } from 'react'
import { DatePicker, Modal } from 'rsuite'
import styled from 'styled-components'
import Button from '../UI/Button'
import ItemDetail from '../UI/ItemDetail'
import InputItem from '../UI/InputItem'
import { RecordInterface } from '../../models/record'

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`

interface Props {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    setRecord: (prevState: (prevState) => RecordInterface) => void
}

const AddRecordModal: FC<Props> = ({
    open,
    onClose,
    onSubmit,
    setRecord,
}): ReactElement => {
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

    return (
        <Modal open={open} onClose={onClose}>
            <Modal.Header>
                <Modal.Title>Add record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    <InputItem label="Title:" onChange={titleChange} edit />
                    <InputItem label="Detail:" onChange={detailChange} edit />
                    <InputItem label="Amount:" onChange={amountChange} edit />
                    <Container>
                        <ItemDetail bolder>Date:</ItemDetail>
                        <DatePicker
                            placeholder="Select Date"
                            style={{ width: 170 }}
                            onSelect={dateChange}
                            oneTap
                            format="yyyy-MM-dd"
                        />
                    </Container>
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button appearance="ghost" onClick={(): void => onClose()}>
                    Cancel
                </Button>
                <Button appearance="primary" onClick={(): void => onSubmit()}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddRecordModal

import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Input as RSInput } from 'rsuite'
import ItemDetail from './ItemDetail'

const Input = styled(RSInput)`
    width: auto;
    display: inline-block;
`

const Container = styled.div`
    margin: 20px;
    padding: 20px;
    border-bottom: 0.5px solid #575a5b4d;
    justify-content: space-between;
    display: flex;
`

interface Props {
    label: string
    onChange: (value: string | number) => void
    defaultValue?: string | number
    edit: boolean
}

const InputItem: FC<Props> = ({
    label,
    onChange,
    defaultValue,
    edit,
}): ReactElement => {
    return (
        <Container>
            <ItemDetail bolder>{label}</ItemDetail>
            {edit ? (
                <Input defaultValue={defaultValue} onChange={onChange} />
            ) : (
                <ItemDetail>{defaultValue}</ItemDetail>
            )}
        </Container>
    )
}

export default InputItem

InputItem.defaultProps = {
    defaultValue: '',
}

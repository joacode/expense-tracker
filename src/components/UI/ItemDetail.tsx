import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface ItemDetailProps {
    bolder?: boolean
}

const Container = styled.span<ItemDetailProps>`
    font-weight: ${(props): string => (props.bolder ? 'bolder' : 'normal')};
    margin: 10px;
`

interface Props {
    children: string | number | string[]
    bolder?: boolean
}

const ItemDetail: FC<Props> = ({ children, bolder }): ReactElement => {
    return <Container bolder={bolder}>{children}</Container>
}

export default ItemDetail

ItemDetail.defaultProps = {
    bolder: false,
}

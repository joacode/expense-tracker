import React, { FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

interface ItemDetailProps {
    bolder?: boolean
}

const Container = styled.span<ItemDetailProps>`
    font-weight: ${(props): string => (props.bolder ? 'bolder' : 'normal')};
    word-wrap: break-word;
    margin: 10px;
`

interface Props {
    children: ReactNode
    bolder?: boolean
}

const ItemDetail: FC<Props> = ({ children, bolder }): ReactElement => {
    return <Container bolder={bolder}>{children}</Container>
}

export default ItemDetail

ItemDetail.defaultProps = {
    bolder: false,
}

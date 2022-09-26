import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

interface BoxProps {
    width?: string
}

const BoxContainer = styled.div<BoxProps>`
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto 40px;
    padding: 30px;
    width: 60rem;
    width: ${(props): string => props?.width || '60rem'};
`

interface Props {
    children: ReactElement | ReactElement[]
    width?: string
}

const Box: FC<Props> = ({ children, width }): ReactElement => {
    return <BoxContainer width={width}>{children}</BoxContainer>
}

export default Box

Box.defaultProps = {
    width: '60rem',
}

import React, { CSSProperties, FC, ReactElement, useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../../contexts/AppContext'

interface BoxProps {
    width?: string
    maxWidth?: string
}

const BoxContainer = styled.div<BoxProps>`
    background: white;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px auto 40px;
    padding: 30px;
    width: fit-content;
    max-width: 60rem;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        margin: 20px 40px;
        display: block;
        width: auto;
    }
`

interface Props {
    children: ReactElement | ReactElement[]
    style?: CSSProperties
}

const Box: FC<Props> = ({ children, style }): ReactElement => {
    const { maxResolutionQuery } = useContext(AppContext)

    return (
        <BoxContainer maxWidth={maxResolutionQuery} style={style}>
            {children}
        </BoxContainer>
    )
}

export default Box

Box.defaultProps = {
    style: null,
}

import React, { FC, ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import Container from 'rsuite/Container'
import Content from 'rsuite/Content'
import Footer from 'rsuite/Footer'
import Header from './Header'
import { theme } from '../../../../styles/theme'

const StyledContainer = styled(Container)`
    min-height: 100vh;
    max-width: 100%;
    background: ${theme.colors.green};
`

export interface Props {
    children?: undefined | ReactNode
}

const Layout: FC<Props> = ({ children }): ReactElement => {
    return (
        <StyledContainer>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </StyledContainer>
    )
}

Layout.defaultProps = {
    children: undefined,
}

export default Layout

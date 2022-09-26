import React, { CSSProperties, FC, ReactElement } from 'react'

interface Props {
    children: ReactElement
    style?: CSSProperties
}

const Title: FC<Props> = ({ style, children }): ReactElement => {
    return <h1 style={{ textAlign: 'center', ...style }}>{children}</h1>
}

export default Title

Title.defaultProps = {
    style: null,
}

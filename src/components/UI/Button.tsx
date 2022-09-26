import React, { CSSProperties, FC, ReactElement, ReactNode } from 'react'
import { Button as RSuiteButton } from 'rsuite'

interface ButtonProps {
    children: ReactNode
    onClick: (e: React.MouseEvent) => void
    style?: CSSProperties
    appearance: 'default' | 'primary' | 'link' | 'subtle' | 'ghost'
}

const Button: FC<ButtonProps> = ({
    onClick,
    style,
    appearance,
    children,
}): ReactElement => {
    return (
        <RSuiteButton appearance={appearance} style={style} onClick={onClick}>
            {children}
        </RSuiteButton>
    )
}

export default Button

Button.defaultProps = {
    style: null,
}

import { createContext } from 'react'

export interface WindowDimensions {
    width: number
    height: number
}

export interface AppContextType {
    maxResolutionQuery: string
    windowDimensions: WindowDimensions
}

const AppContext = createContext<AppContextType>({
    maxResolutionQuery: '540px',
    windowDimensions: {
        width: 320,
        height: 669,
    },
})

export default AppContext

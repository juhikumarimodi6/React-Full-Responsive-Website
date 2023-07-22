import React, { createContext, useContext} from "react";

const StateContext = createContext();

const StateProvider = ({children}) => {
    const [hamburger, setHamburger] = React.useState(true)
    return (
        <StateContext.Provider 
            value={{
                hamburger,
                setHamburger,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

const useGlobalAppContext = () => {
    return useContext(StateContext)
}

export {StateContext, StateProvider, useGlobalAppContext}
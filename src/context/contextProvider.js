import IdeasContext from "./ideasContext";

// does not need this file

const ContextProvider = ({children}) => {

    return(
        <IdeasContext>
            {children}
        </IdeasContext>        
    )
}

export default ContextProvider
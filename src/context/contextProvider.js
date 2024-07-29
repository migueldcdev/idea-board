import IdeasContext from "./ideasContext";

const ContextProvider = ({children}) => {

    return(
        <IdeasContext>
            {children}
        </IdeasContext>        
    )
}

export default ContextProvider
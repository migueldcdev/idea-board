import { createContext, useState, useEffect, Children } from "react";

export const ideasContext = createContext();

const IdeasContext = ({children}) => {
    // parse ideas only here
    const [ideas, setIdeas] = useState(() => { return localStorage.getItem('ideas') || "{}"}) //this should be an array

    useEffect(() => {
        localStorage.setItem('ideas', ideas)
    }, [ideas])

    return(
        <ideasContext.Provider value={{ideas, setIdeas}}>
            {children}
        </ideasContext.Provider>
    )

}

export default IdeasContext
import { useContext } from "react"

import { ideasContext } from "../context/ideasContext"

import { FaPlusCircle} from "react-icons/fa"


import './Button.css'
 
const Button = () => {
    
    const {ideas, setIdeas} = useContext(ideasContext)    

    function createNewTile() {
       const parsedIdeas = JSON.parse(ideas)
       
       if(parsedIdeas.length == undefined) {  
             
        const ideas = [
            {
                id: 1,
                title: '',
                description: '',
                date: Date.now(),
                updated: false
            }
        ]

        setIdeas(JSON.stringify(ideas))

       } else {

        parsedIdeas.push(
            {
                id: parsedIdeas.length + 1,
                title: '',
                description: '',
                date: Date.now(),
                updated: false
            }
        )
                
        setIdeas(JSON.stringify(parsedIdeas))
       }       
        
    }

    return(       
        <div className="container">            
            <FaPlusCircle 
                className="button" 
                onClick={() => createNewTile()}
            />            
        </div>        
    )

}

export default Button
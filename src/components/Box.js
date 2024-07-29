import { useEffect, useState, useContext } from 'react'

import { ideasContext } from '../context/ideasContext'

import Tile from './Tile'

import './Box.css'

const Box = () => {

    const {ideas} = useContext(ideasContext)

    const [parsedIdeas, setParsedIdeas] = useState([])
    
    useEffect(() => {
        if (ideas) setParsedIdeas(JSON.parse(ideas))    
    }, [ideas])

    return(
        
        <div className='box hide-scrollbar '>
            {parsedIdeas.length > 0 ?               
               
               parsedIdeas.map((element, index )=> (
                <Tile 
                    key={index} 
                    props={element}
                /> 
               ))
            :
            <p className='no-ideas'>You haven't added any ideas yet.</p>
            
            }       
        </div>
    )
}

export default Box
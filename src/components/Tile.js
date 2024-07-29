import { useContext } from 'react'

import './Tile.css'

const Tile = ({props}) => {    

    return(
        <div className='tile'>
            <div className='date'>
                {props.creationDate}
            </div>
            <div>
                <input 
                    type='text'  
                    className='title' 
                    placeholder='Title' 
                />
            </div>
            <textarea 
                className='description' 
                rows={4} 
                cols={26}
            >
            </textarea>            
        </div>
    )
}

export default Tile
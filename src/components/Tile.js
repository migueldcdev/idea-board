import { useContext, useState } from 'react'

import { ideasContext } from "../context/ideasContext"

import unixToDate from '../utils/time'

import './Tile.css'

const Tile = ({ props }) => {

    const { ideas, setIdeas } = useContext(ideasContext)

    const [inputHasChanged, setInputHasChanged] = useState(false)

    function deleteIdea() {
        
        const parsedIdeas = JSON.parse(ideas)

        const id = props.id

        const index = parsedIdeas.findIndex(item => item.id == id)

        if (index !== -1) parsedIdeas.splice(index, 1)

        setIdeas(JSON.stringify(parsedIdeas))
    }

    function updateIdea() {
        console.log("Updating")
    }

    return (
        <div className='tile'>
            <div className='flex-between-container'>
                <div >
                    <button 
                        className='delete-button'
                        onClick={() => deleteIdea()} 
                    >
                        x
                    </button>
                </div>
                <div className='date'>
                    {props.updated ? "Updated " : "Created " + unixToDate(props.date)}
                </div>
            </div>
            <div className='center-items'>
                <div>
                    <input
                        type='text'
                        className='title'
                        placeholder='Title'
                        autoFocus
                        onChange={() => setInputHasChanged(true)}
                    />
                </div>
                <textarea
                    className='description'
                    rows={4}
                    cols={26}
                >
                </textarea>
            </div>
            {inputHasChanged ? 
                <div className='flex-end-container'>
                    <button className='update-button'>Update</button>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Tile
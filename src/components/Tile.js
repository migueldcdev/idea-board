import { useContext } from 'react'

import { ideasContext } from "../context/ideasContext"

import unixToDate from '../utils/time'

import './Tile.css'

const Tile = ({ props }) => {

    const { ideas, setIdeas } = useContext(ideasContext)

    function deleteIdea() {
        
        const parsedIdeas = JSON.parse(ideas)

        const id = props.id

        const index = parsedIdeas.findIndex(item => item.id == id)

        if (index !== -1) parsedIdeas.splice(index, 1)

        setIdeas(JSON.stringify(parsedIdeas))
    }

    return (
        <div className='tile'>
            <div>
                <div className='delete-button'>
                    <button onClick={() => deleteIdea()} >x</button>
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
                    />
                </div>
                <textarea
                    className='description'
                    rows={4}
                    cols={26}
                >
                </textarea>
            </div>
        </div>
    )
}

export default Tile
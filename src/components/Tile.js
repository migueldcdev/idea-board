import { useContext, useState } from 'react'

import { ideasContext } from "../context/ideasContext"

import unixToDate from '../utils/time'

import './Tile.css'

const Tile = ({ props }) => {

    const { ideas, setIdeas } = useContext(ideasContext)

    const [inputHasChanged, setInputHasChanged] = useState(false)

    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
        
    function deleteIdea() {

        const parsedIdeas = JSON.parse(ideas)

        const id = props.id

        const index = parsedIdeas.findIndex(item => item.id === id)

        if (index !== -1) parsedIdeas.splice(index, 1)

        setIdeas(JSON.stringify(parsedIdeas))
    }

    function handleChangeTitle(value) {
        setInputHasChanged(true)
        setTitle(value)
    }

    function handleChangeDescription(value) {
        setInputHasChanged(true)
        setDescription(value)
    }

    function updateIdea() {

        const parsedIdeas = JSON.parse(ideas)

        const id = props.id

        const index = parsedIdeas.findIndex(item => item.id === id)

        parsedIdeas[index].title = title

        parsedIdeas[index].description = description

        parsedIdeas[index].updated = true

        setIdeas(JSON.stringify(parsedIdeas))
        
        setInputHasChanged(false)
    }

    return (
        <div className='tile'>
            <div className='flex-between-container'>
                
                <div className='date'>
                    {props.updated ? "Updated "  : "Created "}
                    {unixToDate(props.date)}
                </div>
                <div >
                    <button
                        className='delete-button'
                        onClick={() => deleteIdea()}
                    >
                        x
                    </button>
                </div>
            </div>
            <div className='center-items'>

                <input
                    type='text'
                    className='title'
                    placeholder='Title'
                    autoFocus
                    onChange={(e) => handleChangeTitle(e.target.value)}
                    value={title}
                />

                <textarea
                    className='description'
                    rows={4}
                    cols={26}
                    onChange={(e) => handleChangeDescription(e.target.value)}
                    value={description}
                >
                </textarea>
            </div>
            {inputHasChanged ?
                <div className='flex-end-container'>
                    <button
                        className='update-button'
                        onClick={() => updateIdea()}
                    >
                        Update
                    </button>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Tile
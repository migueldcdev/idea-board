import { useContext, useState } from 'react'
import Confetti from 'react-confetti'

import { ideasContext } from "../context/ideasContext"

import unixToDate from '../utils/time'

import './Tile.css'

const Tile = ({ props }) => {

    const { ideas, setIdeas } = useContext(ideasContext)

    const [inputHasChanged, setInputHasChanged] = useState(false)

    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)

    const [descriptionCharCount, setDescriptionCharCount] = useState(description.length)

    const [confetti, setConfetti] = useState(false)
        
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
        
        if (value.length <= 140) { //need to enforce max length cause does not work on mobile
            setInputHasChanged(true)
            setDescriptionCharCount(value.length)
            setDescription(value)
        }
       
    }

    function updateIdea() {

        const parsedIdeas = JSON.parse(ideas)

        const id = props.id

        const index = parsedIdeas.findIndex(item => item.id === id)

        parsedIdeas[index].title = title

        parsedIdeas[index].description = description

        parsedIdeas[index].updated = true

        setIdeas(JSON.stringify(parsedIdeas))

        throwConfetti()
        
        setInputHasChanged(false)

        
    }

    function throwConfetti() {
        setConfetti(true)
        setTimeout(() => {
            setConfetti(false)
        }, 5000)

    }

    return (
        <div className='tile'>
            {confetti &&
               <Confetti 
                    numberOfPieces={100} 
                    gravity={0.2} 
                    recycle={false}
                >                    
                </Confetti>
            }
            
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
                    maxLength={140}
                    onChange={(e) => handleChangeDescription(e.target.value)}
                    value={description}
                >
                </textarea>

                {descriptionCharCount >= 110 &&
                    <div className='char-count'>
                        {descriptionCharCount}/140
                    </div>
                }
                
            </div>
            {inputHasChanged &&
                <div className='flex-end-container'>
                    <button
                        className='update-button'
                        onClick={() => updateIdea()}
                    >
                        Update
                    </button>
                </div>    
              
            }
        </div>
    )
}

export default Tile
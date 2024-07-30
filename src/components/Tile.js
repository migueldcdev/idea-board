import { useContext } from 'react'

import unixToDate from '../utils/time'

import './Tile.css'

const Tile = ({ props }) => {

    return (
        <div className='tile'>
            <div className='date'>
                {props.updated ? "Updated " : "Created " + unixToDate(props.date)}
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
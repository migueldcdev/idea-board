import { useEffect, useState, useContext } from 'react'

import { ideasContext } from '../context/ideasContext'

import Tile from './Tile'

import './Box.css'

const Box = () => {

    const { ideas } = useContext(ideasContext)

    const [parsedIdeas, setParsedIdeas] = useState([])

    useEffect(() => {
        if (ideas) setParsedIdeas(JSON.parse(ideas))
    }, [ideas])

    return (
        <div>

            {parsedIdeas.length > 0 ?
                <div className='box hide-scrollbar '>
                    {parsedIdeas.map((element, index) => (
                        <Tile
                            key={index}
                            props={element}
                        />
                    ))}
                </div>
                :
                <div>
                    <p className='no-ideas'>
                        You haven't added any ideas yet.
                    </p>
                </div>
            }
        </div>
    )
}

export default Box
/*


*/
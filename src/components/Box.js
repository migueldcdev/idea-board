import { useEffect, useState, useContext } from 'react'

import { ideasContext } from '../context/ideasContext'

import Tile from './Tile'

import './Box.css'


const Box = () => {

    const { ideas } = useContext(ideasContext)

    const [parsedIdeas, setParsedIdeas] = useState([])

    // const [sortByDate, setSortByDate] = useState(true)
    // const [sortedIdeas, setSortedIdeas] = useState([])

    useEffect(() => {
        if (ideas) setParsedIdeas(JSON.parse(ideas))
    }, [ideas])

    // useEffect(() => {

    //     if (ideas && sortByDate) setSortedIdeas(sortIdeasByDate(parsedIdeas))

    //     if (ideas && !sortByDate) setSortedIdeas(sortIdeasByTitle(parsedIdeas))

    // }, [parsedIdeas])

    // function sortIdeasByDate(ideas) {

    //     const sortedIdeas = ideas.sort((x, y) => y.date - x.date);
    //     return sortedIdeas
    // }

    // function sortIdeasByTitle(ideas) {
    //     console.log("hii")
    //     const sortedIdeas = ideas.sort((x, y) => x.title.localCompare(y.title))
    //     return sortedIdeas
    // }

    return (
        <div>
            {parsedIdeas.length > 0 ?
            <div>
                <div className='flex-start-container'>
                    {/* <div className='select-order'>
                        <label>Sort by: </label>
                        <select>
                            <option                               
                                onSelect={() => setSortByDate(true)}
                            >
                                Date
                            </option>

                            <option onSelect={() => {setSortByDate(false)}}>A-Z </option>
                        </select>
                    </div> */}
                </div>
                <div className='box hide-scrollbar '>

                    {parsedIdeas.map((element) => (
                        <Tile
                            key={element.id}
                            props={element}
                        />
                    ))}
                </div>
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
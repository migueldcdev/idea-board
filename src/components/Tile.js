import './Tile.css'

const Tile = () => {

    return(
        <div className='tile'>
            <div className='date'>
                00/00/00
            </div>
            <div>
                <input type='text'  className='title' placeholder='Title'/>
            </div>
            <textarea className='description' rows={4} cols={26}>
            </textarea>            
        </div>
    )
}

export default Tile
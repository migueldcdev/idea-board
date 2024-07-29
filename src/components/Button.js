import { FaPlusCircle} from "react-icons/fa"

import './Button.css'
 
const Button = () => {

    function handleClick() {
        console.log("Clicked")
    }

    return(       
        <div className="container">            
            <FaPlusCircle 
                className="button" 
                onClick={() => handleClick()}
            />            
        </div>        
    )

}

export default Button
import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip"; //Had to download ReactCardFlip from the npm library: and import it here
import background from '../Images/background1.png';
import back from '../Images/background2.png';





function Card(props) {
    //establishing state for the flip for the flip card
    const [flip, setFlip] = useState(false);
    //establishing state for the sign data


    const handleClick = () => {
        props.handleChoice(props.id)

    }

    // This was to flip back if the cards did not match

    // useEffect(() => {
    //     if(props.flipper === true){
    //         setTimeout(()=>{
    //             setFlip(false)
    //            }, 2000)
    //     }
    // },[props.flipper])


    
    
      
  return (
    <>


    
    {/* importing the flip card from the react-card-flip library, which controls the directioon, the onclick, and css of the cards */}
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
           <div className='card' onClick={() => {setFlip(!flip); handleClick()}} style={{
                width: '750px',
                height: '300px',
                fontSize: '40px',
                // background: '#EEB30D',
                backgroundImage: `url(${background})` ,
                color: 'black',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center'
            }}>
                <br/>
                <br/>
                    <p>{props.input}</p>
                
            </div>
            <div onClick={() => {setFlip(!flip)}} style={{
                width: '750px',
                height: '300px',
                backgroundImage: `url(${back})` ,
                fontSize: '40px',
                fontWeight: 'bold',
                color: 'black',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '100px'
            }}>
                {/* here is where i add the state */}
                <p className="libraFlip">{props.id}</p>
                
            </div>
        </ReactCardFlip>
        
</>
)}

export default Card
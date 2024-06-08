import { React, useState} from 'react'
import '../css/square.css'

export default function Square(props) {
    // The first value is the state, the second value is a function that is called to change the state
    const [mined, setMined] = useState(false)
    const [element, setElement] = useState('')
    const [emoji, setEmoji] = useState('')

    const mining = () => {
        // Once the square is clicked, set mined to true since the 49ers has already searched here
        setMined(true)
        // The game will determine the element that the square has and we will render it
        setElement(props.element)

        if(element === 'gold') {
            setEmoji('💰')
        } else if(element === 'empty') {
            setEmoji('🪨')
        } else if(element === 'bomb') {
            setEmoji('💣')
            props.gameover(true)
        }

    }

  return (
    <div className="square" onClick={()=> {mining()}}>{emoji}</div>
  )
}
import { React, useState} from 'react'
import Square from './Square'
import '../css/minesweeper.css'

export default function Minesweeper() {
    const [gameover, setGameover] = useState(false)
    const [gold, setGold] = useState(0)
    const [turns, setTurns] = useState(0)

    const struckBomb = (gameover) => {
        setGameover(gameover)
        console.log('You blew up!')
    }

  return (
    <div>
        <div className='row'>
            <Square element='empty'/>
            <Square element='empty'/>
            <Square element='empty'/>
            <Square element='gold'/>
            <Square element='empty'/>
        </div>
        <div className='row'>
            <Square element='empty'/>
            <Square element='empty'/>
            <Square element='empty'/>
            <Square element='gold'/>
            <Square element='empty'/>
        </div>
        <div className='row'>
            <Square element='gold'/>
            <Square element='empty'/>
            <Square element='bomb' gameover={struckBomb} />
            <Square element='gold'/>
            <Square element='empty'/>
        </div>
        <div className='row'>
            <Square element='empty'/>
            <Square element='bomb' gameover={struckBomb}/>
            <Square element='empty'/>
            <Square element='empty'/>
            <Square element='empty'/>
        </div>
        <div className='row'>
            <Square element='bomb' gameover={struckBomb}/>
            <Square element='gold'/>
            <Square element='gold'/>
            <Square element='empty'/>
            <Square element='empty'/>
        </div>
    </div>
  )
}

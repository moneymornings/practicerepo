import { React, useState, useEffect } from 'react'

export default function Jokes() {
    const [joke, setJoke] = useState('')

    // useEffect(() => {
    //     console.log('inside of useEffect hook')
    //     tellJoke()
    // })

    const tellJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random?category=dev")
        .then((res) => res.json())
        .then((data) => {
            setJoke(data.value)
        })
    }


  return (
    <div>
        <p>{ joke }</p>
        <button onClick={ tellJoke }> Get a new joke</button>
    </div>
  )
}

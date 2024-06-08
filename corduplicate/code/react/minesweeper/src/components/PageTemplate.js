import React from 'react'
import Navbar from './Navbar'

export default function PageTemplate(props) {
  return (
    <div>
        <Navbar />
        {props.children}
    </div>
  )
}

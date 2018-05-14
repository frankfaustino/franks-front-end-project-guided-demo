import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ notes }) => (
  <div className='Container'>
    <h1>Your Notes:</h1>
    <div className='ListView'>
      {notes.map((note, i) => {
        return (
          <Link to={{ pathname: `/note/${note._id}`, note }} key={i}>
            <div className='Note__container' >
              <h4>{note.title}</h4>
              <span>{note.content}</span>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
)

export default ListView
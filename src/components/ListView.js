import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({ notes }) => (
  <div className='ListView'>
    {notes.map((note, i) => {
      return (
        <Link to={{ pathname: `/note/${note._id}`, note }} key={i}>
          <div className='Note__container'>
            <div>{note.title}</div>
            <div>{note.content}</div>
          </div>
        </Link>
      )
    })}
  </div>
)

export default ListView
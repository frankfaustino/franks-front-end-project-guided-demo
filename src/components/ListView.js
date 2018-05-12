import React from 'react'
import { Link } from 'react-router-dom'

const ListView = (props) => {
  return (
    <div className='ListView'>
      {props.notes.map((note, i) => {
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
}

export default ListView
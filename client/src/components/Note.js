import React from 'react'
import { Link } from 'react-router-dom'

const Note = props => {
  const del = event => {
    event.preventDefault()
    props.handleDelete(props.location.note._id)
    props.history.push('/')
  }

  return (
    <div className="Container">
      <h2>{props.location.note.title}</h2>
      <div>{props.location.note.content}</div>
      <Link
        to={{
          pathname: `/edit/${props.location.note._id}`,
          note: props.location.note
        }}
      >
        <button>Edit</button>
      </Link>
      <button onClick={del}>Delete</button>
    </div>
  )
}

export default Note

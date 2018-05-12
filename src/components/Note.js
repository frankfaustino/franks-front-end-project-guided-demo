import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {
  const del = (event) => {
    event.preventDefault()
    props.handleDelete(props.location.note._id)
    props.history.push('/')
  }

  return (
    <Fragment>
      <h2>{props.location.note.title}</h2>
      <div>{props.location.note.content}</div>
      <Link to={`/edit/${props.location.note._id}`}><button>Edit</button></Link>
      <button onClick={del}>Delete</button>
    </Fragment>
  )
}

export default Note
import React, { Fragment } from 'react'

const Edit = (props) => {
  const submit = (event) => {
    event.preventDefault()
    props.handleEdit(props.match.params.id)
    props.history.push('/')
  }

  return (
    <Fragment>
      <h2>Edit Note:</h2>
      <form onSubmit={submit}>
        <input name='title' onChange={props.handleChange} value={props.title} />
        <textarea name='content' onChange={props.handleChange} value={props.content} />
        <button type='submit'>Update</button>
      </form>
    </Fragment>
  )
}

export default Edit
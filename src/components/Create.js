import React, { Fragment } from 'react'

const Create = (props) => {
  const submit = (event) => {
    event.preventDefault()
    props.handleSubmit()
    props.history.push('/')
  }

  return (
    <Fragment>
      <h2>Create New Note:</h2>
      <form onSubmit={submit}>
        <input name='title' onChange={props.handleChange} value={props.title} />
        <textarea name='content' onChange={props.handleChange} value={props.content} />
        <button type='submit'>Save</button>
      </form>
    </Fragment>
  )
}

export default Create
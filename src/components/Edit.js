import React from 'react'

const Edit = (props) => {
  console.log(props)
  const submit = (event) => {
    event.preventDefault()
    props.handleEdit(props.match.params.id)
    props.history.push('/')
  }

  return (
    <div>
      <h2>Edit Note:</h2>
      <form onSubmit={submit}>
        <input name='title' onChange={props.handleChange} value={props.title} />
        <textarea name='content' onChange={props.handleChange} value={props.content} />
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Edit
import React from 'react'

const Edit = props => {
  const submit = event => {
    event.preventDefault()
    props.handleEdit(props.match.params.id)
    props.history.push('/')
  }

  return (
    <div className="Container">
      <h2>Edit Note:</h2>
      <form className="Form" onSubmit={submit}>
        <input
          name="title"
          placeholder={props.location.note.title}
          onChange={props.handleChange}
          value={props.title}
        />
        <textarea
          name="content"
          placeholder={props.location.note.content}
          onChange={props.handleChange}
          value={props.content}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Edit

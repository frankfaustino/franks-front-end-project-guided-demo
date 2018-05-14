import React from 'react'

const Create = props => {
  const submit = event => {
    event.preventDefault()
    props.handleSubmit()
    props.history.push('/')
  }

  return (
    <div className='Container'>
      <h2>Create New Note:</h2>
      <form className='Form' onSubmit={submit}>
        <input
          name="title"
          placeholder="Note Title"
          onChange={props.handleChange}
          value={props.title}
        />
        <textarea
          name="content"
          placeholder="Note Content"
          onChange={props.handleChange}
          value={props.content}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Create

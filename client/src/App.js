import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import ListView from './components/ListView'
import NavBar from './components/NavBar'
import Create from './components/Create'
import Note from './components/Note'
import Edit from './components/Edit'

class App extends Component {
  state = {
    notes: [],
    title: '',
    content: ''
  }

  /* GET notes array from our server,
  then save them to our notes array in our state */
  componentDidMount() {
    axios
      .get('http://localhost:8888/note/')
      .then(({ data }) => this.setState({ notes: data }))
      .catch(error => console.log(error.message))
  }

  /* saves the input/textarea values to
  our state when onChange triggers */
  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  /* sends our new note from our state (title, content)
  as a POST request to our server */
  handleSubmit = () => {
    const { title, content, notes } = this.state

    axios
      .post('http://localhost:8888/note/', { title, content })
      .then(({ data }) =>
      /* save the response data from our server to our state */
        this.setState({
          title: '',
          content: '',
          notes: [...notes, data]
        })
      )
      .catch(error => console.log(error.message))
  }

  /* sends our updated note from our state (title, content)
  as a PUT request to our server */
  handleEdit = id => {
    const { title, content } = this.state

    axios
      .put(`http://localhost:8888/note/edit/${id}`, { title, content })
      .then(() => {
        /* map through our notes array in our state
        and replace the note with matching _id with our updated note */
        const notes = this.state.notes.map(
          note => (note._id === id ? { title, content } : note)
        )
        this.setState({
          title: '',
          content: '',
          notes
        })
      })
      .catch(error => console.log(error.message))
  }

  /* send a DELETE request to our server w/ id */
  handleDelete = id => {
    axios
      .delete(`http://localhost:8888/note/delete/${id}`)
      .then(() => {
        /* filter out the delete note from notes array in our state */
        const notes = this.state.notes.filter(note => note._id !== id)
        this.setState({ notes })
      })
      .catch(error => console.log(error.message))
  }

  /* next 4 methods allows us to pass state and functions as props
  to our Routes */
  renderListView = props => <ListView notes={this.state.notes} />

  renderCreate = props => (
    <Create
      {...props}
      content={this.state.content}
      title={this.state.title}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />
  )

  renderNote = props => <Note {...props} handleDelete={this.handleDelete} />

  renderEdit = props => (
    <Edit
      {...props}
      content={this.state.content}
      title={this.state.title}
      handleChange={this.handleChange}
      handleEdit={this.handleEdit}
    />
  )

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div className="App">
            <Route exact path="/" render={this.renderListView} />
            <Route path="/create" render={this.renderCreate} />
            <Route path="/note/:id" render={this.renderNote} />
            <Route path="/edit/:id" render={this.renderEdit} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default App

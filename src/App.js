import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import ListView from './components/ListView'
import NavBar from './components/NavBar'
import { Create } from './components/Create'
import Note from './components/Note'
import Edit from './components/Edit'

class App extends Component {
  state = {
    notes: [],
    title: '',
    content: ''
  }

  componentDidMount() {
    axios
      .get('http://localhost:8888/note/')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error.message))
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { title, content, notes } = this.state

    axios
      .post('http://localhost:8888/note/', { title, content })
      .then(response =>
        this.setState({
          title: '',
          content: '',
          notes: [...notes, response.data]
        })
      )
      .catch(error => console.log(error.message))
  }

  handleEdit = id => {
    const { title, content, notes } = this.state

    axios
      .put(`http://localhost:8888/note/edit/${id}`, { title, content })
      .then(response => {
        const notes = this.state.notes.map(
          note => (note._id === id ? { title, content } : note)
        )

        this.setState({
          title: '',
          content: '',
          notes: notes
        })
      })
      .catch(error => console.log(error.message))
  }

  handleDelete = id => {
    console.log(id)
    axios
      .delete(`http://localhost:8888/note/delete/${id}`)
      .then(() => {
        const notes = this.state.notes.filter(note => note._id !== id)
        this.setState({ notes })
      })
      .catch(error => console.log(error.message))
  }

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
            <header className="App-header">
              <h1>Your Notes:</h1>
            </header>
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

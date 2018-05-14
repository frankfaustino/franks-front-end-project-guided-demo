const Note = require('./model')
// const User = require('../user/model')

module.exports = {

  post: async (req, res) => {
    const { content, title } = req.body
    const note = new Note({ content, title })
    const saved = await note.save()
    res.status(201).json(saved)
  },

  getAllNotes: async (req, res) => {
    const query = await Note.find().select('-__v')
    res.json(query)
  },

  getNote: async (req, res) => {
    const { params: { id } } = req
    const query = await Note.findById(id)
    res.json(query)
  },

  deleteNote: async (req, res) => {
    const { params: { id } } = req
    const query = await Note.findByIdAndRemove(id)
    req.method = 'GET'
    query ? res.redirect('../') : res.status(404).json({ err: 'Unable to delete note' })
  },

  updateNote: async (req, res) => {
    const { params: { id }, body: { content, title } } = req
    const query = await Note.findByIdAndUpdate(id, { content, title })
    req.method = 'GET'
    query ? res.redirect('../') : res.status(404).json({ err: 'Unable to update note' })
  },

  // post: async (req, res) => {
  //   const { body: { content, title }, user: { _id: author } } = req
  //   const user = await User.findById(author)
  //   const newNote = new Note({ author, content, title })
  //   const note = await newNote.save()
  //   await user.notes.push(note)
  //   await user.save()
  //   res.status(201).json(note)
  // },

  // getUsersNotes: async (req, res) => {

  // },

  // getLoggedInUsersnotes: async (req, res) => {

  // },
}
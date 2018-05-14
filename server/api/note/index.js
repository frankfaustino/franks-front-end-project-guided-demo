const router = require('express').Router()

const { deleteNote, getNote, getAllNotes, post, updateNote } = require('./controller')
// const { authenticate, restricted, roleAuth } = require('../util/auth')
const { catchErr } = require('../util')

router.get('/', catchErr(getAllNotes))
router.get('/:id', catchErr(getNote))
router.post('/', catchErr(post))
router.put('/edit/:id', catchErr(updateNote))
router.delete('/delete/:id', catchErr(deleteNote))
// router.post('/', restricted, roleAuth(['admin', 'user']), catchErr(post))

module.exports = router
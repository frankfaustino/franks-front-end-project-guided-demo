import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div className="NavBar">
    <h1>Lambda Notes</h1>
    <Link to='/'><button>View Your Notes</button></Link>
    <Link to='/create'><button>+ Create New Note</button></Link>
  </div>
)

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">jsx</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="State" to="classcom">Classcomponent</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/state">State</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/prop">Props</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/des">Destruction</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">jsx</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar
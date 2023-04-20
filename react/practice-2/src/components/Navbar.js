import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">AddNumber</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/cal">Multcal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shop">Shoping</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/check">Checked</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/drop">Drop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/session">session</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/radio">Radio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/even">OddEven</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/amg">Amgstrong</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/multi">MultyTable</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/session1">Table</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
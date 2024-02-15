import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}style={{backgroundColor : props.colour.backgcolor}}>
    <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li  className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick= {props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div> */}
      </div>
        <div className={`text text-${props.mode==='light'?'black':'white'} text-center mx-1`}>Choose Dark Mode Color</div>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={props.blueMode} style={{height: '20px', width : '42px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Blue</button>
        <button type="button" className="btn btn-danger btn-sm mx-1" onClick={props.redMode} style={{height: '20px', width : '42px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Red</button>
        <button type="button" className="btn btn-success btn-sm mx-1" onClick={props.greenMode} style={{height: '20px', width : '42px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Green</button>
        <button type="button" className="btn btn-warning btn-sm mx-1" onClick={props.yellowMode} style={{height: '20px', width : '42px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Yellow</button>
        <button type="button" className="btn btn-dark btn-sm mx-1" onClick={props.blackMode} style={{height: '20px', width : '42px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Black</button>
        <div className={`text text-${props.mode==='light'?'black':'white'} text-center`} style={{fontSize: 30}}>I</div>
        <button type="button" className="btn btn-light btn-sm mx-1" onClick={props.lightMode} style={{height: '20px', width : '70px', border : props.mode==='light'?'1px solid black':'1px solid white', padding: 0, fontSize: 13}}>Light mode</button>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: "Provide text",
  about: "About"
}
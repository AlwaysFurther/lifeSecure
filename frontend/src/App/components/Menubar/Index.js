import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Menubar.css'

class Menubar extends Component {

  render() {
    const { pathname } = this.props.location;
    return (
      <nav className='Menubar text-center'>
        <div className="menubar-link-group">
          <Link
            className={`menubar-link-item ${pathname === "/"? "active": ""}`}
            to="/"
          >
            Secure Life
          </Link>
          {/*<Link className="menubar-link-item" to="/protectors">My Protectors</Link>*/}
          <Link
            className={`menubar-link-item ${pathname === "/checkPeople"? "active": ""}`}
            to="/checkPeople"
          >
            Watch Out People
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Menubar)
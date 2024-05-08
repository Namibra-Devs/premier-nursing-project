import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/Programs">Programmes</a>
                   {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a>
                    </li>
                    <li><a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-item"><a className="nav-link" href="/Admissions"> Admissions</a>
                </li>
                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">News and Events</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/News">News</a>
                    </li>
                    <li><a className="dropdown-item" href="/Events">Events</a>
                    </li>
                    
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="/Gallery">Gallery</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <Link to="/"><span className="navbar-brand mb-0 h1">Currency Exchange</span></Link>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <a href="/" className="badge bg-dark text-decoration-none">
            GitHub
          </a>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://yeshaiticanprogram.com" target='_blank' rel="noopener noreferrer">Miguel</a> with Altcademy Help</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;

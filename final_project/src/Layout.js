import React from 'react';

import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home: Recipe Search</Link>
          </li>
          <li>
            <Link to="/Test2">Forum</Link>
          </li>
          <li>
            <Link to="/Test">Project Summary</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

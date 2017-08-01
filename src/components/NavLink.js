import React from 'react';
import {Route, Link} from 'react-router-dom';


const NavLink = ({to, children}) => (
    <Route path={to} children={({match}) => (
        <li role="presentation" className={match ? 'menuselected' : ''}>
          <Link to={to}>{children}</Link>
        </li>
    )} />
);

export default NavLink;

import React from "react";
import './nav.scss'
import {
    
    Link, NavLink
  } from "react-router-dom";


class Nav extends React.Component {
    render ()  {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    ToDo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">ToDo</Link>
                <Link to="/about">About</Link> */}
                
            </div>
        )
    }
}
export default Nav;
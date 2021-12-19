import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import logo from '../logo.svg'
import {ShoppingPage} from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/">Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="nav-active" to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/users">
                        <h1>users</h1>
                    </Route>
                    <Route path="/">
                        <ShoppingPage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

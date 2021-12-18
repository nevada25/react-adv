import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, Redirect
} from "react-router-dom";
import logo from '../logo.svg'
import {Routes} from "./routes";

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading</span>}>
            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo"/>
                        <ul>
                            {
                                Routes.map(({path, name}) => {
                                    return (
                                        <li key={path}>
                                            <NavLink exact activeClassName="nav-active"
                                                     to={path}>{name}</NavLink>
                                        </li>
                                    );
                                })
                            }

                        </ul>
                    </nav>

                    <Switch>
                        {
                            Routes.map(({path, component: Component}) => (
                                <Route
                                    key={path}
                                    path={path}
                                    render={() => {
                                        return <Component/>
                                    }}/>
                            ))
                        }

                        <Redirect to={Routes[0].path}/>
                    </Switch>
                </div>
            </Router>
        </Suspense>

    );
}

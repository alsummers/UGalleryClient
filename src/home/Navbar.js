import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import {routes} from './_routes';
import {Route, Link} from 'react-router-dom'
import './home.css'

class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            
        
        };
    }


    render() {
        return (
            <div>
            <div>
                <Navbar color="faded"  light expand="md">

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="light" className="nav-button" onClick={() => this.props.clickLogout()}>{this.props.isLogin ? 'Logout' : 'Login'}</Button>
                            </NavItem>
                            <NavItem>
                                <Link to='/'><Button className="nav-button" color="light">Gallery</Button></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/museums'><Button className="nav-button" color="light">Musuem</Button></Link>
                            </NavItem>
                           
                        </Nav>

                </Navbar>
            </div>
            <div className="navbar-route">
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main} />
            ))}
            </div>
            </div>
        );
    }

}

export default SiteBar;
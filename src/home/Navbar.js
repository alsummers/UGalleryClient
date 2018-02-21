import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import {routes} from './_routes';
import {Link, Route} from 'react-router-dom'

class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
            <div>
                <Navbar color="faded"  light expand="md">
                    <NavbarToggler onClick={this.props.loggout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                            <NavItem>
                                <Button><Link to="/museums">Museums</Link></Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
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
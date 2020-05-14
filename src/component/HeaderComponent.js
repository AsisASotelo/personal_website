import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav, NavbarToggler,Collapse, NavItem} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import {NavLink} from 'react-router-dom';

import { render } from 'react-dom';
//2. Add imports here 

class Header extends Component {
    //3. Setup constructor in Header
    constructor(props) {
        super(props);
        this.state={
            isNavOpen:false,
        };
        this.toggleNav=this.toggleNav.bind(this)
    }

   



// FUNCTION DEFINTIONS

toggleNav(){
    this.setState({isNavOpen:!this.state.isNavOpen});

}

// RENDER FUNCTION

    render(){

        return(
            <>
            <Fade duration={1000}>

            <Navbar id="#navbar" className="navbar navbar-expand-lg navbar-light bg-light mr-auto brand-font" expand="md">
                
                    <NavbarBrand className="mr-auto" href="/home">A <strong>S</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className="mr-2"/>
                    

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink className ="nav-link" to="/home">Home</NavLink>
                                
                            </NavItem> */}
                            <NavItem>
                                <NavLink className ="nav-link" to="/blog">Blog</NavLink>
                                
                            </NavItem>
                            <NavItem>
                                <NavLink className ="nav-link" to="/projects">Projects</NavLink>
                                
                            </NavItem>
                            
                            <NavItem>

                                <a className ="nav-link" href="https://github.com/AsisASotelo">Github</a>
                                
                            </NavItem>



                        </Nav>

                    </Collapse>

               

            </Navbar>
            </Fade>

            
            
            
  

            
            
            

          
        </>
        )

    }
}

export default Header;


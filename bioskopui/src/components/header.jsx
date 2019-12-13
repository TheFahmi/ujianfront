import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {FaCartArrowDown} from 'react-icons/fa'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className='mr-2 pt-2'>
              <Link to={'/manageadmin'}>manageadmin</Link>
            </NavItem>
            <NavItem className='mr-2 pt-2'>
              <Link to={'/cart'}><FaCartArrowDown style={{color:'pink', fontSize:28}}/></Link>
            </NavItem>
            {props.namauser===''?
              <NavItem>
                <Link to={'/login'}>Login</Link>
              </NavItem>
              :
              null
            }
              {
                props.namauser===''?
                null
                :
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {props.namauser}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

              }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
const MapstateToprops=(state)=>{
  return{
      namauser:state.Auth.username

  }
}
export default connect(MapstateToprops) (Header);
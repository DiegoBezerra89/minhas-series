import React, { useState } from 'react'
import { 
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler, 
} from 'reactstrap';

const Header = () => {
  const [open , setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand>Minhas Séries</NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={open} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/'>Gêneros</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/favoritos'>Favoritos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Lançamentos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Quero assistir</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header
import React from 'react'
import styled from 'styled-components'
import CartContent from './CarContent'



const Nav = () => {


  return (
    <NavContainer className='nav-center'>
      <CartContent />
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 2rem;
  position:relative;
  margin-top: 15px;
  background: var(--clr-headerBackground);
 

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

`

export default Nav

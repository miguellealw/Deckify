import React, { useState } from 'react'
import { Link } from '@reach/router'
import styled, { withTheme } from 'styled-components/macro'

import { PhoneOnly, TabletPortraitUp } from './Responsive'

import Logo from 'shared/components/Logo'
import ClearButton from 'shared/components/ClearButton'

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  height: 3.5rem;
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 3;

  width: 100%;

  /* ${({ theme: { media } }) => media.desktopUp`background: dodgerblue;`} */
`

const ulStyles = {
  listStyle: 'none',
  margin: 0,
}

/* background: red; */
const ButtonContainer = styled.ul`
  li {
    display: inline-block;
    margin-left: 1rem;
  }
`

const NavIcon = styled.div`
  width: 1.3rem;
  height: 0.4rem;

  /* background: red; */

  position: relative;

  cursor: pointer;

  &::after,
  &::before {
    content: '';
    width: 100%;
    height: 0.1rem;
    background: white;
  }

  &::after {
    position: absolute;
    top: 0;
  }

  &::before {
    position: absolute;
    bottom: 0;
  }
`

const DropdownContainer = styled.ul`
  font-size: 0.8rem;
  min-width: 10rem;
  min-height: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  /* background: purple; */

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 100%;
  right: 0;

  li {
    color: white;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #1a2941;
    /* border-bottom: 1px solid #20324e; */

    &:hover {
      background: ${({ theme }) => theme.colors.gradients};
    }
  }
`

const Dropdown = () => (
  <DropdownContainer data-testid="menu-dropdown">
    <Link to="/profile">
      <li>Profile</li>
    </Link>
    <Link to="/login">
      <li>Login</li>
    </Link>
    <Link to="/signup">
      <li>Signup</li>
    </Link>
  </DropdownContainer>
)

const Navigation = ({ theme }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <NavigationContainer data-testid="navigation">
      <Link
        to="/"
        css={`
          text-decoration: none;
        `}
      >
        <Logo />
      </Link>

      <ButtonContainer style={ulStyles}>
        <TabletPortraitUp>
          <li>
            <Link to="/profile">
              <ClearButton>Profile</ClearButton>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <ClearButton>Login</ClearButton>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <ClearButton>Sign Up</ClearButton>
            </Link>
          </li>
        </TabletPortraitUp>

        {/* Nav Icon */}
        <PhoneOnly>
          <li>
            <NavIcon aria-label="menu" onClick={() => setOpen(!isOpen)} />
          </li>
        </PhoneOnly>
      </ButtonContainer>

      <PhoneOnly>{isOpen && <Dropdown />}</PhoneOnly>
    </NavigationContainer>
  )
}

export default React.memo(withTheme(Navigation))

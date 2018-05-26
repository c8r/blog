import React from 'react'
import { Link } from 'react-router-dom'
import {
  ThemeProvider,
  Flex,
  Box,
  Container,
  NavBar,
  NavLink,
} from '@compositor/mono'
import { Logo } from '@compositor/logo'

export default class App extends React.Component {
  render () {
    const { render, routes } = this.props

    return (
      <ThemeProvider>
        <NavBar>
          <NavLink is={Link} to='/'>Blog</NavLink>
        </NavBar>
        <Container
          maxWidth={768}
          pt={4}
          pb={6}>
          {render({
            routes
          })}
        </Container>
      </ThemeProvider>
    )
  }
}

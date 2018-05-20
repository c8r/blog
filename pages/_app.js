import React from 'react'
import {
  Flex,
  Container,
  NavBar,
  NavLink,
  MegaFooter,
  GA
} from '../lab'

export default class App extends React.Component {
  render () {
    const { render, routes } = this.props

    return (
      <Flex
        flexDirection="column"
        style={{
          minHeight: '100vh'
        }}>
        <NavBar>
          <NavLink href='https://compositor.io/blog/'>
            Blog
          </NavLink>
        </NavBar>
        <Container
          width={1}
          pt={4}
          pb={6}
          style={{
            flex: 'auto',
            maxWidth: 768
          }}>
          {render()}
        </Container>
        <MegaFooter />
        <GA />
      </Flex>
    )
  }
}

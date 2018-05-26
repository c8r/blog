import React from 'react'
import {
  Flex,
  Box,
  Container,
  NavBar,
  NavLink,
  MegaFooter,
  GA
} from '../lab'
import { Logo } from '@compositor/logo'

export default class App extends React.Component {
  render () {
    const { render, routes } = this.props

    return (
      <Flex>
        <Box flex='none' width={256} bg='tomato'>
          <Logo size={48} />
        </Box>
        <Box width={1}>
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
        </Box>
      </Flex>
    )

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

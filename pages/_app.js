import React from 'react'
import { Link } from 'react-router-dom'
import {
  ThemeProvider,
  Flex,
  Box,
  Text,
  Container,
  NavBar,
  NavLink,
  GA,
} from '@compositor/mono'
import { Logo } from '@compositor/logo'
import styled from 'styled-components'

const Typography = styled('div')([], {
  lineHeight: 1.625
})

export default class App extends React.Component {
  render () {
    const { render, routes } = this.props

    return (
      <ThemeProvider>
        <Typography>
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
            <Box py={5}>
            </Box>
            <Flex alignItems='center'>
              <Box mx='auto' />
              <Text fontSize={0}>© 2018 Compositor, Inc. All rights reserved</Text>
            </Flex>
          </Container>
        </Typography>
        <GA />
      </ThemeProvider>
    )
  }
}

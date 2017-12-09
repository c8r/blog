---
title: Compositor Blog
og:
  image: https://compositor.io/logo/dist/compositor.png
twitter:
  card: summary
  site: '@getcompositor'
  title: Compositor Blog
  image: https://compositor.io/logo/dist/compositor.png
---
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
    {props.created && (
      <Text fontSize={0}>
        <Caps>
          {props.author} | Posted on {props.created}
        </Caps>
      </Text>
    )}
    {props.children}
  </Container>
  <MegaFooter />
</Flex>
<GA />

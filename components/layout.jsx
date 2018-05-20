---
title: Compositor Blog
og:
  title: Compositor Blog
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
    <article>
      {props.children}
    </article>
    {props.created && (
      <Text fontSize={0} mt={5}>
        <Caps>
          Posted by {props.author} on {props.created}
        </Caps>
      </Text>
    )}
  </Container>
  <MegaFooter />
</Flex>
<GA />

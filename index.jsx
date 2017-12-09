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
  flexDirection='column' w={1}
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
    py={4}
    style={{
      flex: 'auto',
      maxWidth: 768,
    }}>
    <Title>Blog</Title>
    {options.pages
      .filter(page => page.data && !!page.data.title && !!page.data.created)
      .map(page => (
        <Box key={page.data.title} my={4}>
          <Heading mb={3}>
            <Link
              color='inherit'
              href={page.name}>
              {page.data.title}
            </Link>
          </Heading>
          <Text>
            {page.data.created}
          </Text>
        </Box>
      ))
    }
  </Container>
  <MegaFooter />
</Flex>
<GA />

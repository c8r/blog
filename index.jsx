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
    }}>
    <Flex align='center' wrap>
      <Box w={[ 1/4, 1/3, 1/2 ]}>
        <Logo width={1} />
      </Box>
      <Box w={[ 3/4, 2/3, 1/2 ]} py={5}>
        <Title>Compositor Blog</Title>
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
      </Box>
    </Flex>
  </Container>
  <MegaFooter />
</Flex>
<GA />

import React from 'react'
import { Link } from 'react-router-dom'
import {
  Heading,
  Text,
  Pre,
  Block,
  BlockLink
} from '@compositor/mono'
import posts from '../posts'

export default ({
  routes
}) => (
  <React.Fragment>
    <Block is='h1' my={[ 5, 6 ]} fontSize={4}>Blog</Block>
    {posts.map(post => (
      <BlockLink
        key={post.slug}
        is={Link}
        mb={5}
        to={post.slug}>
        <Heading mb={2}>{post.title}</Heading>
        <Text mb={3}>{post.excerpt}</Text>
        <Pre>
          {post.created.toLocaleString('en-US', { timeZone: 'UTC' })}
          {' | '}
          {post.author}
        </Pre>
      </BlockLink>
    ))}
  </React.Fragment>
)

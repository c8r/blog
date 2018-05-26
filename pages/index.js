import React from 'react'
import { Link } from 'react-router-dom'
import {
  Heading,
  Text,
  Pre,
  Block,
  BlockLink
} from '@compositor/mono'
import IntroducingKit from '../posts/introducing-kit.md'
import OpenFormats from '../posts/open-formats.md'

const posts = [
  IntroducingKit,
  OpenFormats,
].map(Post => ({
  ...Post.defaultProps
}))

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
          {post.created}
          {' | '}
          {post.author}
        </Pre>
      </BlockLink>
    ))}
  </React.Fragment>
)

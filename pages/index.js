import React from 'react'
import OpenFormats from '../posts/open-formats.md'

const posts = [
  OpenFormats,
]

export default () => (
  <React.Fragment>
    {posts.map(post => (
      <div>
        <h1>{post.defaultProps.title}</h1>
        <p>{post.defaultProps.excerpt}</p>
        <pre>
          {post.defaultProps.created}
          {' | '}
          {post.defaultProps.author}
        </pre>
      </div>
    ))}
  </React.Fragment>
)

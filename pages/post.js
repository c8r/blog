import React from 'react'
import { Pre } from '@compositor/mono'
import posts from '../posts'

const routes = posts.map(post => ({
  path: '/' + post.slug
}))

export default class Post extends React.Component {
  static getInitialProps = async ({ path }) => {
    console.log(path)
    return {
      path: '/:name',
      routes
    }
  }

  render () {
    const { name } = this.props.match.params
    const post = posts.find(post => post.slug === name)

    if (!post) {
      return false
    }

    const {
      Component,
      created,
      author
    } = post

    return (
      <React.Fragment>
        <Component />
        <Pre my={4}>{created} {author}</Pre>
      </React.Fragment>
    )
  }
}

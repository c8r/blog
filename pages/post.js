import React from 'react'
import { Pre } from '@compositor/mono'
import posts from '../posts'
import scope from './_scope'

const routes = posts.map(post => ({
  path: '/' + post.slug
}))

export default class Post extends React.Component {
  static getInitialProps = async ({ path }) => {
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
        <Component scope={scope} />
        <Pre my={4}>{created.toDateString()} | {author}</Pre>
      </React.Fragment>
    )
  }
}

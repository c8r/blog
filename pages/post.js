import React from 'react'
import { Pre } from '@compositor/mono'
import posts from '../posts'
import scope from './_scope'
import getMeta from './_meta'

const routes = posts.map(post => ({
  path: '/' + post.slug
}))

export default class Post extends React.Component {
  static getInitialProps = async ({ path }) => {
    const post = posts.find(post => '/' + post.slug === path) || {}
    const { title, excerpt } = post
    const meta = title ? getMeta({
      'twitter:title': title,
      'twitter:description': excerpt
    }) : undefined
    return {
      path: '/:name',
      routes,
      title,
      meta
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

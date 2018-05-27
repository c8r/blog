const path = require('path')

const req = require.context('.', false, /\.md$/)

const posts = req.keys()
  .filter(key => /\./.test(path.basename(key)))
  .map(key => {
    const Component = req(key).default
    return {
      key,
      ...Component.defaultProps,
      Component
    }
  })
  .filter(post => !post.draft)

export default posts

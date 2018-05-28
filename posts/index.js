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
  .sort((a, b) => {
    return a.created > b.created ? -1 : 1
  })

export default posts

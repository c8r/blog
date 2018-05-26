
const req = require.context('.', false, /\.md$/)

const posts = req.keys().map(key => {
  const Component = req(key).default
  return {
    key,
    ...Component.defaultProps,
    Component
  }
})

export default posts

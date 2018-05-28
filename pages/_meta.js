const defaultMeta = {
  description: 'Tools for Designers & Developers',
  'twitter:card': 'summary',
  'twitter:site': '@getcompositor',
  'twitter:title': 'Compositor Blog',
  'twitter:description': 'Tools for Designers & Developers',
  'twitter:image': 'https://compositor.io/logo/dist/compositor.png'
}

export default obj => {
  const merged = Object.assign({}, defaultMeta, obj)
  const meta = Object.keys(merged)
    .reduce((a, key) => {
      const tag = { name: key, content: merged[key] }
      return [ ...a, tag ]
    }, [])
  return meta
}


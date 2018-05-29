---
title: 'x0: Making React Component Development Stupid Simple'
slug: x0-making-react-component-development-stupid-simple
created: 2018-05-28
author: Brent Jackson
publication: Compositor
canonicalURL: https://compositor.io/blog/x0-making-react-component-development-stupid-simple/
tags:
  react
  zero-config
  development
  design
  open source
  cli
twitter:
  card: summary
  site: '@getcompositor'
  title: 'x0: Making React Component Development Stupid Simple | Compositor Blog'
  image: https://compositor.io/logo/dist/compositor.png
excerpt:
  We’re big fans of the KISS principle at Compositor,
  and we think anything that poses a barrier to the creative process can really affect the quality of the work you do.
---


# x0: Making React Component Development Stupid Simple

We’re big fans of the [KISS principle][kiss] at Compositor,
and we think anything that poses a barrier to the creative process can really affect the quality of the work you do.
We're also big fans of React (no surprise), which has ushered in a paradigm shift for UI design and development.

For people who develop software, there can be a huge boost to productivity with the right abstractions, making things that were previously tedious and
time-consuming more efficient and making the person using these abstractions more productive.
React represents a helpful abstraction on top of lower-level HTML, CSS, and JS in the form of functional components.

While React can be a huge boost to productivity,
this new abstraction comes with new barriers
to entry for people unfamiliar with the JavaScript ecosystem.
Even with the introduction of great tools like [Create React App][cra],
getting started with an idea can require the proper setup and can slow down the creative process.

We built [x0][x0] with these things in mind and really enjoy using x0 as a quick, no frills prototyping and development tool.
With [version 5][v5], we've taken advantage of recent updates in the webpack ecosystem and made it even faster and easier to work with multiple components at once.

x0 is based on the principle of smart defaults.
Rather than duplicating boilerplate code for React, Babel and webpack,
x0 is a batteries-included development tool with the most common settings enabled.

```sh
npm i -g @compositor/x0
```

```sh
x0 components
```

X0 now accepts a directory of React components as an entry point.
Create a folder of components and pass it to the `x0` command;
an isolated development server will start up in seconds,
creating routes based on the file names, with no config or custom setup required.
Your components will automatically update in the browser with any code change thanks to webpack's hot module replacement feature.

X0 also uses the new [webpack-serve][webpack-serve] module which is noticeably faster than the now deprecated webpack-dev-server.
When you want to share what you've built with others, x0 lets you quickly export a static site, which can be pushed to GitHub or published to any CDN.
The new x0 also supports [Compositor JSX][jsx] format, letting you quickly prototype component compositions with a common component library, without the overhead of building out a full component. We've also included [MDX][mdx] support for mixing markdown syntax with React components.

We love using x0 as a quick and painless React development server, and we hope you will too.
Get started with x0 now, or let us know what you think on Twitter [@getcompositor][twitter].

- [x0 on GitHub][x0gh]


[x0]: https://compositor.io/x0
[x0gh]: https://github.com/c8r/x0
[twitter]: https://twitter.com/getcompositor
[cra]: https://github.com/facebook/create-react-app
[webpack-serve]: https://github.com/webpack-contrib/webpack-serve
[kiss]: https://en.wikipedia.org/wiki/KISS_principle
[v5]: https://github.com/c8r/x0/releases/tag/v5.0.0
[jsx]: https://github.com/c8r/jsx-loader
[mdx]: https://github.com/mdx-js/mdx

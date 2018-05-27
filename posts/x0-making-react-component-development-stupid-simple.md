---
draft: true
title: x0: Making React Component Development Stupid Simple
slug: x0-making-react-component-deveopment-stupid-simple
created: 05-27-2018
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
  title: x0: Making React Component Development Stupid Simple | Compositor Blog
  image: https://compositor.io/logo/dist/compositor.png
excerpt:
  We're big fans of the KISS principle (Keep It Simple, Stupid) at Compositor,
  And we think that anything that poses a barrier to the creative process can really affect the quality of work you do.
---


# x0: Making React Component Development Stupid Simple

We're big fans of the KISS principle (Keep It Simple, Stupid) at Compositor,
And we think that anything that poses a barrier to the creative process can really affect the quality of work you do.
We're also (no surprise) big fans of React, which has ushered in a paradigm shift for UI design and development.

For people who learn to code, there is a huge boost to productivity with the right abstractions, making things that were previously tedious and
Time-consuming more efficient and making the person using these abstractions more productive.

React represents a helpful abstraction on top of lower-level HTML, CSS, and JS in the form of functional components.

While React can be a huge boost to productivity,

With this new abstraction comes new barriers to entry for people unfamiliar with the JavaScript ecosystem.

Even with the introduction of great tools like Create React App, getting started with an idea can require the proper setup and can slow down the creative process.

We built x0 with these things in mind and really enjoy using x0 as a quick, no frills prototyping and development tool.

With version 5, we've taken advantage of recent updates in the webpack ecosystem and made it even faster and easier to work with multiple components at once.

x0 is based on the principle of smart defaults. Rather than duplicating code with boiler plates for React, Babel and webpack, x0 is a batteries-included development tool with the most common settings enabled.

X0 now accepts a directory of React components as an entry point.
Create a folder of components and pass it to the `x0` command;
an isolated development server will start up in seconds
creating routes based on the file names, with no config or custom setup required.
Your components will automatically update in the browser with any code change thanks to webpack's hot module replacement feature.

X0 also uses the new webpack-serve module which is noticeably faster than the now deprecated webpack-dev-server.

When you want to share what you've built with others, x0 lets you quickly export a static site, which can be pushed to GitHub or published to any CDN.

The new x0 also supports Compositor JSX format, letting you quickly prototype component compositions with a common component library, without the overhead of building out a full component. We've also included MDX support for mixing markdown notes with components.


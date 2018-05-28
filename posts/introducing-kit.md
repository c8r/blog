---
draft: true
title: Introducing Kit
slug: introducing-kit
created: 2018-05-29
author: Brent Jackson
publication: Compositor
canonicalURL: https://compositor.io/blog/introducing-kit/
tags:
  react
  components
  cli
  open source
  design
  development
  documentation
  testing
twitter:
  card: summary
  site: '@getcompositor'
  title: Inroducing Kit | Compositor Blog
  image: https://compositor.io/logo/dist/compositor.png
excerpt:
  While working on various React projects and component libraries, we started to feel that the currently available tools for developing, documenting, and testing components require a lot of boilerplate and overhead and can end up taking much more time than you'd expect.
---

# Introducing Kit

While working on various React projects and component libraries,
we started to feel that the currently available tools for developing, documenting, and testing components
require a lot of boilerplate and overhead and can end up taking much more time than you'd expect.

We often end up with markdown files for documentation, custom API code for development environments,
a separate code base for style guides and demos, and snapshot tests that are largely duplicative of the rest.
While our source code was fairly [DRY][dry], the amount of code to support it seemed all over the place.

We took a step back and thought, what if our component examples could be reused for developing components,
creating documentation, and writing tests,
with a minimal amount of effort to set up and flexible enough to integrate with any existing React setup.

This line of thinking led us to create [Kit][kit], a suite of tools for developing, documenting, and testing React components,
intended to maximize code reuse.
Kit consists of several different modules, but at its core is a set of [utility components][components] for creating documentation and demos and a [command line interface][cli] for zero-config isolated development environments.

## Components Over Configuration

Some React development tooling requires the overhead of learning custom APIs, configurations, and library-specific code.
With Kit, we've tried to follow our philosophy of **Components Over Configration**.
Instead of increasing the surface area of your project with library-specific APIs,
we've tried to keep it simple by using an API most React developers will already be familiar with: components and props.

Because the core part of Kit is built using React components,
Kit components will work in virtually any React application setup,
whether you use [Create React App][cra], [Next.js][nextjs], [Gatsby][gatsby], or a custom setup.

## Library components

![Screenshot of the Kit Library components](https://github.com/c8r/kit/raw/master/core/docs/images/library.png)

Kit includes a set of components for displaying your components in isolation,
with a grid view of multiple components at once, and detail views for testing components in isolation.

```jsx
import React from 'react'
import { Library, Example, Detail } from '@compositor/kit'
import { Heading, Button } from '../src'

export default props =>
  <Library>
    <Example name='Heading'>
      <Heading>Hello</Heading>
    </Example>
    <Example name='Button'>
      <Button>Hello</Button>
      <Detail>
        <Button primary>Primary</Button>
        <Button secondary>Primary</Button>
        <Button large>Large</Button>
        <Button small>Small</Button>
      </Detail>
    </Example>
  </Library>
```

## The Cartesian component

![Screenshot of the Kit Cartesian component](https://github.com/c8r/kit/raw/master/core/docs/images/cartesian.png)

The Kit Cartesian component can be used to display the [Cartesian product][cartesian-product] of a component's props.

## The XRay component

![Screenshot of the Kit XRay component](https://github.com/c8r/kit/raw/master/core/docs/images/x-ray.png)

The XRay component is a great way to visually debug CSS layout in your React components.
It displays a customizable grid and outlines each HTML element to help ensure that your components are aligned as expected.

## The Kit CLI

Kit also includes a zero-config development environment built on top of the Kit components and [Compositor x0][x0],
allowing you to quickly spin up a component library view based on a folder of example components.

```sh
npm i -g @compositor/kit-cli
```

```sh
kit examples --mode library
```

![Kit CLI demo](https://github.com/c8r/kit/raw/master/docs/demo.gif)

## More to Come

We have a lot of ideas for how we can make Kit an even more useful set of tools for building and maintaining
React component libraries, and we'd love to hear what you think.
Hit us up on Twitter at [@getcompositor][twitter] or check out the [project on GitHub][kit] to get started

<!--
- maximize code reuse
-->

[kit]: https://github.com/c8r/kit
[components]: https://github.com/c8r/kit/tree/master/core
[cli]: https://github.com/c8r/kit/tree/master/cli
[cra]: https://github.com/facebook/create-react-app
[nextjs]: https://github.com/zeit/next.js/
[gatsby]: https://github.com/gatsbyjs/gatsby
[cartesian-product]: https://en.wikipedia.org/wiki/Cartesian_product
[x0]: https://compositor.io/x0
[twitter]: https://twitter.com/getcompositor
[dry]: https://en.wikipedia.org/wiki/Don't_repeat_yourself

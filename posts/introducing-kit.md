---
title: Introducing Kit
slug: introducing-kit
created: '05-26-2018'
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
  Kit is a suite of tools for developing, documenting, and testing React component libraries
---

# Introducing Kit

While working on various React projects and libraries,
we felt that the currently available tools for developing, documenting, and testing components require
a lot of setup and overhead, and don't always follow development principles like *Don't Repeat Yourself (DRY)*.

We often end up with markdown files for documentation, custom API code for development environments,
a separate code base for style guides and demos, and snapshot tests that are largely duplicative of the rest.
While our source code was fairly DRY, the amount of code to support it seemed all over the place.

We took a step back and thought, what if our component examples could be reused for developing components,
creating documentation, and writing tests,
with a minimal amount of effort to set up and flexible enough to integrate with any existing React setup.

This line of thinking led us to create [Kit][kit], a suite of tools for developing, documenting, and testing React components.
Kit consists of many different utilities, but at its core is a set of utility components for creating documentation and demos and a command line interface for zero-config isolated development environments.

## Components Over Configuration

Some React development tooling requires the overhead of learning custom APIs, configurations, and API-specific code.
With Kit, we've tried to follow our philosophy of **Components Over Configration**.
Instead of increasing the API surface area of your project with custom configuration,
we've tried to keep it simple by using an API most React developers will already be familiar with: components and props.

Because the core part of Kit is built using React components,
Kit components will work in virtually any React application setup,
whether you use [Create React App][cra], [Next.js][nextjs], [Gatsby][gatsby], or a custom setup.

## Library components

## The Cartesian component

## The XRay component

## The Kit CLI



<!--
- simple setup
- maximize code reuse
  - developing, documenting, and testing
    - components over configuration
- minimal api surface area
- works with any react setup

- Library
- XRay
- Cartesian
-->

[kit]: https://github.com/c8r/kit
[cra]: https://github.com/facebook/create-react-app
[nextjs]: https://github.com/zeit/next.js/
[gatsby]: https://github.com/gatsbyjs/gatsby

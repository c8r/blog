---
title: Open Formats
created: '12-06-2012'
author: Brent Jackson
publication: Compositor
canonicalURL: https://compositor.io/blog/open-formats/
tags:
  open source
  design
  development
  file formats
  data structures
---
<style>
.container-lg {
  max-width: 768px !important;
}
</style>

# Open Formats

At Compositor, we want you to have complete control over the things you create with our tools.
One way we’re trying to do this is by using open and transparent data formats and offering open source tools to integrate with our apps.

Developers try to avoid tools that lead to lock-in,
and we think design tools should produce output that can be consumed in a variety of ways.

One of the guiding principles for our products is:

> Anything in. Anything out.

We’ve currently focused the beta versions of our [Lab][lab] and [Iso][iso] apps around React because of its wide adoption and the wonderful community around it.
But we'd like our tools to integrate with whatever front-end tech stack your team uses, whether it’s styled-components, CSS Modules, a CSS library in a Rails app, Vuejs, Angular, or whatever new framework sits around the corner.

You might’ve taken a peek into the `theme.json`, `lab.json`, or JSX files created with our apps, and, while the formats are modeled around similar component concepts to React, we want to remain somewhat agnostic to technology stacks.

Today, we’re open sourcing [lab-cli][lab-cli] which is the module used in Lab to export to different React CSS-in-JS libraries
and a command line utility for integrating Lab files with your team's build process.

## Theme

The `theme.json` file created by Lab is a plain object intended to store any shared stylistic constants for your apps.
Currently, the app stores typographic, layout, and color constants, with plans for more in-app integrations in the future.
Since this is stored as JSON, you can import this theme into other components not created in Lab, and it works well with most CSS-in-JS ThemeProviders.
Additionally, you can add any arbitrary values to the theme that Lab doesn't currently cover.

## Lab components

Lab is focused on creating single element, style components.
Each component is modeled after React components and conventions found in CSS-in-JS libraries
and is defined as a JSON object with *at least* the following properties: `name`, `type`, `style`, `props`, and `system`.

```js
// example Lab component definition
{
  name: 'Text',
  type: 'div',
  style: {
    lineHeight: 1.5
  },
  props: {
    fontSize: 2
  },
  system: [
    'textAlign',
    'fontWeight'
  ],
  examples: [
    '<Text>Hello</Text>',
    '<Text fontSize={4}>Hello</Text>',
    '<Text align="center">Hello</Text>',
  ],
  description: 'A simple typographic primitive',
  keywords: [
    'typography',
    'text'
  ]
}
```

### Name

Each component requires a unique name. Component names follow the same conventions as React components – it must start with a capital letter and be a valid JavaScript variable name.

### Type

The type property is similar to the `React.createElement` type argument.
Lowercase names map to HTML and SVG elements, and capitalized names reference other components.
The thinking behind using HTML elements is that HTML is a widely used standard for semantic markup.
To output to platforms other than the web, either components can be used for the type
*or* HTML element names can be mapped to other components, such as React Native, using a dictionary object.
We'd rather rely on standards and conventions than reinvent the wheel for UI elements.

### Style

The style object is a static, plain object based on CSS.
Keys can either be camelCased or kebab-cased,
and pseudoclasses are supported with nested objects.

### Props

The props object is based on React props and is passed as default props to output React components.
Just as in React, props can also be used to pass HTML attributes to the underlying element.
This is especially useful for things like form elements.
All theme-related styles should be defined as props, which can pick up values from the theme object.

By default the Lab app uses [styled-system][styled-system] for thematic styles,
with plans for supporting other libraries and custom utilities in the future.

### System (Functions)

The `system` array is a list of keys that reference [styled-system][styled-system] utilities.
We plan to rename this property and add support for references to any other custom style functions.

Each referenced function takes `props` as an argument and returns a style object that is assigned to the static `style` object.
The `props` argument will also receive the `theme` object from `theme.json`,
which allows styles to reference style constants.
These functions are based on conventions found in other CSS-in-JS libraries such as [styled-components][styled-components].

### Metadata

In addition to the style component properties above, the following are added as additional metadata to help with documentation and testing:

- `description`: A human readable description of the component
- `examples`: An array of JSX strings used to render examples for testing
- `keywords`: An array of taxonomic strings for categorization

### Composite components and Iso JSX format

One of the key features of using a component-based UI system is composition.
In Lab, you can create composite components that are made up of other components.
In Iso, each `.jsx` file is a composite component and is interchangeable with the `lab.json` composite component definition.

In Lab, composite components are defined in JSON, with the following properties:

- `name`: a unique name for the component
- `imports`: an array of component names required by the composite component
- `jsx`: a JSX string representing the element structure of the component
- `propTypes`: (planned) an object of prop type definitions, referenced by string

In Iso, each file works similarly, but the entire `lab.json` component library is available in scope, rather than requiring imports to be explicitly defined.
The JSX file format uses [front-matter][front-matter] ([YAML][yaml] syntax at the beginning of the file) to define props for the component.
Reserved prop names can be introduced to add additional functionality beyond static props.
Currently, IMPORTS is used to explicitly define imports that are not included in the `lab.json` file.

By default, each Iso file is a pure component and helps encourage some of the ideas presented in Guillermo Rauch’s Pure UI article.

Our rationale for using JSX syntax is:

- It is used in component-based libraries such as React and Vuejs.
- Most UI is rendered as a nested tree structure, e.g. HTML.
- XML is excellent at representing tree structures and can help show where parent elements end.
- JSX can also be represented as a JSON object with `type`, `props`, and `children` properties.
- In addition to the declarative nature of XML/HTML, JSX adds a familiar pattern for functional composition.

Read more about the authors of JSX’s rationale here: [JSX Specification][jsx]

## Just a start

We recognize that this format may not suit all needs but are dedicated to better interoperability between code and design tools.
If other, better or more popular data formats arise, we will gladly support whatever the community moves towards and continue to build tools that help designers and developers work together.

---

We'd like to thank the following for sharing their ideas and helping inspire some of the thinking behind our tools:

Nicole Sullivan, Nicholas Gallagher, Guillermo Rauch, Diana Mounter, Wilson Miner, Colm Tuite, Dan Eden, Bryn Jackson, Brian Lovin, Geoff The, Max Stoiber, Glen Maddern, Mark Dalgleish, Dan Abramov, The React team, Storybook, Figma, Interplay App

And a special thank you goes out to our community of beta testers and their continued support!

Further Reading:

- [Pure UI][pure-ui]
- [Interface][interface]


[lab]: https://compositor.io/lab/
[iso]: https://compositor.io/iso/
[lab-cli]: https://github.com/c8r/lab-cli/
[styled-system]: https://github.com/jxnblk/styled-system
[styled-components]: https://github.com/styled-components/styled-components
[front-matter]: https://jekyllrb.com/docs/frontmatter/
[yaml]: http://yaml.org
[jsx]: https://facebook.github.io/jsx/
[pure-ui]: https://rauchg.com/2015/pure-ui
[interface]: https://spectrum.chat/thread/ac4cba39-0582-4b73-9582-9e863ed66346

<!--
> properties (of jsx) allow us to “narrow the gap between design and code”.
-->

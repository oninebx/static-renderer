# static-renderer

static-renderer is a small experimental renderer built with React, TypeScript, and Vite. It demonstrates a configuration-driven approach to page rendering: instead of hardcoding page structure in components, you describe the page as data and let the renderer turn it into React elements.

The project is designed to be simple and extensible, with a clear separation between:

- page configuration
- layout registration
- component registration
- rendering logic

## Why this project exists

In many content-driven or marketing-style pages, page structure is often more like data than imperative UI code. This project explores a lightweight pattern where:

- layouts are registered and resolved dynamically
- components are resolved by type
- page content is rendered recursively
- missing layouts or components can fall back to friendly placeholders

This makes it easier to experiment with reusable page templates and declarative content structures.

## Core idea

A page can be described in a simple object form, for example:

```ts
const pageConfig = {
  layout: 'ArticleLayout',
  title: 'Hello World',
  content: [
    {
      type: 'Typography',
      as: 'p',
      children: 'This page is rendered from configuration.',
    },
  ],
};
```

The renderer reads this config and produces the final React output.

## Features

- Config-driven page rendering
- Dynamic layout resolution
- Dynamic component resolution
- Recursive rendering of nested node structures
- Simple fallback handling for missing layouts or components
- Demo playground with example pages and layouts

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Project structure

```text
src/
  core/
    createRenderer.ts
    renderPage.tsx
    renderNode.tsx
    types.ts
  playground/
    statics/
      components/
      layouts/
      pages/
      index.tsx
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

## How it works

The rendering flow is centered around three core pieces:

1. createRenderer
   - Accepts layouts and components registries
   - Exposes renderPage and createRoutes helpers

2. renderPage
   - Reads a page config
   - Resolves the target layout
   - Passes the page content to the node renderer

3. renderNode
   - Recursively renders each content node
   - Resolves components by type
   - Renders fallback UI when a component is missing

## Demo

The playground includes sample pages and layouts that showcase how page configuration can drive different interfaces.

You can explore:

- article-style pages
- landing-style pages
- custom component rendering
- fallback behavior for unregistered nodes

## License

This project is for demonstration and learning purposes.

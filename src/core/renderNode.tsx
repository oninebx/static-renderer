import { createElement, Fragment, type ReactNode } from 'react';
import type { NodeContent, Registry } from './types';

const VALID_HTML_TAGS = new Set([
  'div', 'span', 'p', 'a', 'button', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'section', 'article', 'nav', 'header', 'footer', 'main',
  'b', 'i', 'strong', 'em', 'input', 'textarea', 'label', 'form', 'svg', 'path'
]);

interface RenderNodeOptions {
  components?: Registry;
  onMissingComponent?: (type: string) => ReactNode;
}

const renderNode = (
  node: NodeContent,
  key?: string,
  options: RenderNodeOptions = {}
): ReactNode => {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return null;
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => renderNode(child, `${key ?? 'node'}-${index}`, options));
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return node;
  }

  const { type, children, props = {} } = node;
  const componentProps = { ...props, key };
  const Component = options.components?.[type];

  const childrenNodes = Array.isArray(children)
    ? children.map((child, index) => renderNode(child, `${key ?? 'node'}-${index}`, options))
    : renderNode(children ?? null, undefined, options);

  if (Component) {
    return createElement(Component, componentProps, childrenNodes);
  }

  // if (typeof type === 'string') {
  //   if (type === 'Fragment' || type === 'fragment') {
  //     return createElement(Fragment, componentProps, childrenNodes);
  //   }

  //   const isIntrinsicElement = VALID_HTML_TAGS.has(type);
  //   if (isIntrinsicElement) {
  //     return createElement(type, componentProps, childrenNodes);
  //   }
  // }

  if (options.onMissingComponent) {
    return options.onMissingComponent(type);
  }

  return createElement(
    'div',
    { key, style: { color: 'red', padding: '8px', border: '1px solid rgba(255,0,0,0.2)' } },
    `Component not found: ${type}`
  );
};

export default renderNode;
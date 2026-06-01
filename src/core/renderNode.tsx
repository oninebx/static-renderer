import { createElement, type ReactNode } from 'react';
import type { NodeContent, Registry } from './types';


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

  const { type, children, ...rest } = node;
  const componentProps = { ...rest, key };
  const Component = options.components?.[type];

  const childrenNodes = Array.isArray(children)
    ? children.map((child, index) => renderNode(child, `${key ?? 'node'}-${index}`, options))
    : renderNode(children ?? null, undefined, options);

  if (Component) {
    return createElement(Component, componentProps, childrenNodes);
  }

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
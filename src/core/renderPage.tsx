import type { ReactNode } from 'react';
import renderNode from './renderNode';
import type { PageConfig, Registry } from './types';

interface RenderPageOptions {
  components?: Registry;
  layouts?: Registry;
  onMissingComponent?: (type: string) => ReactNode;
  onMissingLayout?: (layout: string) => ReactNode;
}

const renderPage = (
  pageConfig: PageConfig,
  options: RenderPageOptions = {}
): ReactNode => {
  const { layout, content, ...rest } = pageConfig;
  const Layout = options.layouts?.[layout];

  const children = Array.isArray(content)
    ? content.map((node, index) => renderNode(node, index.toString(), options))
    : renderNode(content ?? null, undefined, options);

  if (!Layout) {
    if (options.onMissingLayout) {
      return options.onMissingLayout(layout);
    }

    return (
      <div style={{ color: 'red', padding: '8px', border: '1px solid rgba(255,0,0,0.2)' }}>
        Layout not found: {layout}
      </div>
    );
  }

  return (
    <Layout {...rest}>
      {children}
    </Layout>
  );
};

export default renderPage;
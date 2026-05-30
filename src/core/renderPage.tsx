import { getLayout } from "./registries";
import renderNode from "./renderNode";
import type { NodeContent } from "./types";

interface PageConfig {
  layout: string;
  content: NodeContent;
  [key: string]: unknown;
}

export const RenderPage = ({ layout, content, ...rest }: PageConfig) => {
  const Layout = getLayout(layout);

  if (!Layout) return <div>Layout not found</div>;

  return (
    <Layout {...rest}>
      {
        Array.isArray(content) ? 
          content.map((node, index) => renderNode(node, index.toString())) : renderNode(content)
      }
    </Layout>
  );
};
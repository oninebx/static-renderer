import { getLayout } from "./registries";
import renderNode from "./renderNode";
import type { PageConfig } from "./types";



const renderPage = ({ layout, content, ...rest }: PageConfig) => {
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

export default renderPage;
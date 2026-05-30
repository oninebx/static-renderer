import React from "react";
import { getLayout } from "./registries";

interface PageConfig {
  layout: string;
  [key: string]: unknown;
}

export const RenderPage = ({ layout, ...rest }: PageConfig) => {
  const RawLayout = getLayout(layout);

  if (!RawLayout) return <div>Layout not found</div>;

  const Layout = RawLayout as React.ComponentType<Record<string, unknown>>;

  return (
    <Layout {...rest}>
      <div>页面正文</div>
    </Layout>
  );
};
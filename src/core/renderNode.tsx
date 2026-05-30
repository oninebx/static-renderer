import type { ReactNode } from "react";
import { getComponent } from "./registries";
import type { NodeConfig } from "./types";

const renderNode = (node: NodeConfig | string | number, key?: string) => {
  if(typeof node === "string"|| typeof node === "number") {
    return node;
  }
  const { type, children, ...rest } = node;
  const Component = getComponent(type);

  if (!Component) {
    return <div>Component not found: {type}</div>;
  }

  let childrenNodes: ReactNode = null;
  if(Array.isArray(children)) {
    childrenNodes = children.map((child, index) => renderNode(child, index.toString()));
  } else if (children) {
    childrenNodes = renderNode(children);
  }

  return <Component key={key} {...rest}>{childrenNodes}</Component>;
};

export default renderNode;
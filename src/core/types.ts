
interface PageConfig {
  layout: string;
  content: NodeContent;
  [key: string]: unknown;
}

interface NodeConfig {
  type: string;
  children?: NodeContent;
  [key: string]: unknown;
}

type NodeContent = NodeConfig | NodeConfig[] | string | number;

export type {
  PageConfig,
  NodeConfig, 
  NodeContent 
};
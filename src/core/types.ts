interface NodeConfig {
  type: string;
  children?: NodeContent;
  [key: string]: unknown;
}

type NodeContent = NodeConfig | NodeConfig[] | string | number;

export type {
  NodeConfig, 
  NodeContent 
};
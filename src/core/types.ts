
interface PageConfig {
  layout: string;
  content?: NodeContent;
  path?: string;
  props?: Record<string, unknown>;
  [key: string]: unknown;
}

interface NodeConfig {
  type: string;
  props?: Record<string, unknown>;
  children?: NodeContent;
  [key: string]: unknown;
}

type NodeContent = NodeConfig | NodeConfig[] | string | number | boolean | null;

export type {
  PageConfig,
  NodeConfig,
  NodeContent
};
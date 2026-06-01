import type { ElementType } from "react";

type Registry = Record<string, ElementType>;

interface PageConfig {
  layout: string;
  content?: NodeContent;
  path?: string;
  [key: string]: unknown;
}

interface NodeConfig {
  type: string;
  children?: NodeContent;
  [key: string]: unknown;
}

type NodeContent = NodeConfig | NodeConfig[] | string | number | boolean | null;

export type {
  Registry,
  PageConfig,
  NodeConfig,
  NodeContent
};
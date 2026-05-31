
import type { ElementType } from 'react';

export type Registry = Record<string, ElementType>;

export const createRegistry = (entries: Registry = {}) => {
  return entries;
};

export const getRegistryComponent = (registry: Registry | undefined, name: string) => {
  return registry?.[name];
};

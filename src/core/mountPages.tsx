import type { ReactNode } from 'react';
import renderPage from './renderPage';
import type { PageConfig } from './types';
import type { Registry } from './registries';

export interface StaticPageRoute {
  path: string;
  pageConfig: PageConfig;
}

export interface MountPagesOptions {
  components?: Registry;
  layouts?: Registry;
  onMissingComponent?: (type: string) => ReactNode;
  onMissingLayout?: (layout: string) => ReactNode;
}

const createStaticRoutes = (
  routes: StaticPageRoute[],
  createRoute: (path: string, element: ReactNode) => ReactNode,
  options: MountPagesOptions = {}
) => {
  return routes.map(({ path, pageConfig }) => createRoute(path, renderPage(pageConfig, options)));
};

export default createStaticRoutes;
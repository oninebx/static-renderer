import type { ReactNode } from "react";
import type { PageConfig, Registry } from "./types";
import renderPage from "./renderPage";

interface StaticPageRoute {
  path: string;
  page: PageConfig;
}


interface CreateRendererOptions {
  layouts?: Registry;
  components?: Registry;
  onMissingLayout?: (layout: string) => ReactNode;
  onMissingComponent?: (type: string) => ReactNode;
};

interface CreateRoutesOptions  {
  createRoute: (path: string, element: ReactNode) => ReactNode;
}

interface Renderer {
  renderPage: (pageConfig: PageConfig) => ReactNode; 
  createRoutes: (routes: StaticPageRoute[], options: CreateRoutesOptions ) => ReactNode[];
}

const createRenderer = (options: CreateRendererOptions): Renderer => {
  const {
    layouts = {},
    components = {},
    onMissingLayout,
    onMissingComponent,
  } = options;

  const runtime = {
    layouts,
    components,
    onMissingLayout,
    onMissingComponent,
  };

  const render = (page: PageConfig): ReactNode => renderPage(page, runtime);

  const createRoutes = (routes: StaticPageRoute[], { createRoute }: CreateRoutesOptions ): ReactNode[] => {
    return routes.map(({ path, page }) => createRoute(path, render(page)));
  }

  return {
    renderPage: render,
    createRoutes,
  }
};

export default createRenderer;
  
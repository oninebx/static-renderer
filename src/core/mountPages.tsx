import renderPage from "./renderPage";
import type { PageConfig } from "./types";

interface StaticPageRoute {
  path: string;
  pageConfig: PageConfig;
}

const registeredPages: StaticPageRoute[] = [];

export const registerPage = (path: string, pageConfig: PageConfig) => {
  registeredPages.push({ path, pageConfig });
};

const mountStaticPages = (createRoute: (path: string, element: React.ReactNode) => React.ReactNode) => () => {
  return registeredPages.map(({ path, pageConfig }) => createRoute(path, renderPage(pageConfig)));
};

export default mountStaticPages;
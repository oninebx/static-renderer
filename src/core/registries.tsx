
// Component Registry

export type Registry = Record<string, React.ComponentType<unknown>>;

const componentsRegistry: Registry = {};

const registerComponents = (components: Registry) => {
  Object.assign(componentsRegistry, components);
};

const getComponent = (name: string) => {
  return componentsRegistry[name];
};


// Layout Registry

const layoutRegistry: Registry = {};

const registerLayouts = (layouts: Record<string, React.ComponentType<never>>) => {
  Object.assign(layoutRegistry, layouts);
};

const getLayout = (name: string) => {
  return layoutRegistry[name];
};


export {
  registerComponents,
  getComponent,
  registerLayouts,
  getLayout,
}

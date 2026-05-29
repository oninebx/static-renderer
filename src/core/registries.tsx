
// Component Registry

export type Registry = Record<
  string,
  React.ComponentType<any>
>;

const componentsRegistry: Registry = {};

const registerComponents = (components: React.ComponentType<any>) => {
  Object.assign(componentsRegistry, components);
};

const getComponent = (name: string) => {
  return componentsRegistry[name];
};


// Layout Registry

const layoutRegistry: Registry = {};

const registerLayouts = (
  layouts: React.ComponentType<any>
) => {
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
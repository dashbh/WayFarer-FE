declare module "@wayfarer_mfe_home/*" {
  import { ComponentType } from "react";

  type MFEComponent = ComponentType;
  const Component: MFEComponent;
  export { Component as default };
}

declare module "@wayfarer_mfe_search/*" {
  import { ComponentType } from "react";

  type MFEComponent = ComponentType;
  const Component: MFEComponent;
  export { Component as default };
}

declare module "@wayfarer_mfe_nav/*" {
  import { ComponentType } from "react";

  type MFEComponent = ComponentType;
  const Component: MFEComponent;
  export { Component as default };
}

declare module "*.svg" {
  const content: string;
  export default content;
}
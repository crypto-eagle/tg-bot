/// <reference types="vite-plugin-svgr/client" />

import React from "react";

declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

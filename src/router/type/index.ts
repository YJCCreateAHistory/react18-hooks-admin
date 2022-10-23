import React from "react";

export interface Meta {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title:string;
  key?:string;
}

export interface RoutesAssembly {
  caseSensitive?: boolean;
  children?:RoutesAssembly[];
  element?:React.ReactNode;
  // index?:boolean;
  path?:string;
  meta?:Meta;
  isLink?:string;
}

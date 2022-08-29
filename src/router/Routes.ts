import { ComponentType } from "react";
import IndexPage from "../pages";
import Page404 from "../pages/404";

interface IRoutes {
  path: string;
  Component: ComponentType
}

enum RoutesPath {
  INDEX_ROUTE = '/',
  ROUTE_404 = '*'
}

export const publicRoutes: IRoutes[] = [
  {
    path: RoutesPath.INDEX_ROUTE,
    Component: IndexPage
  },
  {
    path: RoutesPath.ROUTE_404,
    Component: Page404
  },
] 
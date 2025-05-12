import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";


import type { NextRequest } from 'next/server'
 /*
 createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
      {
        path: "concerts",
        children: [
          { index: true, Component: ConcertsHome },
          { path: ":city", Component: ConcertsCity },
          { path: "trending", Component: ConcertsTrending },
        ],
      },
    ],
  },
]);**/

export async function GET(request: NextRequest) {
  const url = request.nextUrl
  console.log('request -->',request);
}
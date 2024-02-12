// import { cssBundleHref } from "@remix-run/css-bundle";
import { NextUIProvider } from "@nextui-org/system";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Provider } from "jotai";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "/favicon.png" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider>
          <NextUIProvider>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </NextUIProvider>
        </Provider>
      </body>
    </html>
  );
}

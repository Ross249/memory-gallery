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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "icon", href: "/favicon.png" },
];

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <Meta />
            <Links />
          </head>
          <body>
            <NextUIProvider>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </NextUIProvider>
          </body>
        </html>
      </QueryClientProvider>
    </Provider>
  );
}

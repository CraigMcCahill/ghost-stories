import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import stylesheet from "../styles/style.css?url";
import { assetPath } from "@/lib/site";

export function links() {
  return [
    { rel: "stylesheet", href: stylesheet },
    {
      rel: "icon",
      href: `${assetPath("/favicon.svg")}?v=3`,
      type: "image/svg+xml",
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

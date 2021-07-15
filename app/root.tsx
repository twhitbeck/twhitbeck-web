import type { LinksFunction } from "remix";
import { Meta, Links, Scripts, LiveReload } from "remix";
import { Outlet, Link } from "react-router-dom";

import tailwindUrl from "./styles/tailwind.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindUrl }];
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}

        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>;
}

function Header() {
  return (
    <div className="bg-blue-100 border-b border-blue-200">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex">
            <Link
              className="text-green-800 text-3xl font-bold hover:text-green-900"
              to="/"
            >
              twhitbeck
            </Link>
          </div>

          <nav className="flex space-x-10">
            {[
              ["/", "Home"],
              ["/resume", "Resume"],
              ["/about", "About"],
            ].map(([to, label]) => (
              <Link
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                to={to}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default function App() {
  return (
    <Document>
      <Header />

      <MaxWidthWrapper>
        <Outlet />
      </MaxWidthWrapper>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}

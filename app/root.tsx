import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Form,
  redirect,
  Link,
} from "remix";
import type { MetaFunction, LinksFunction, ActionFunction } from "remix";
import globalStylesUrl from "~/styles/global.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  const search = formData.get("search");
  return redirect(`/breweries?query=${search}`);
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="app__header">
          <Form method="post">
            <label>
              <Link to="/" className="app__logo">
                🍺
              </Link>{" "}
              <input name="search" />
            </label>
            <button type="submit">Find</button> <span>Route: Root</span>
          </Form>
          <Link to="/about">About</Link>{" "}
        </header>
        <div className="app__container">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

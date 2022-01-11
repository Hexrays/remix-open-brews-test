import type {
  MetaFunction,
  LoaderFunction,
  LinksFunction,
  ErrorBoundaryComponent,
} from "remix";
import { useLoaderData, Outlet, Link, useCatch, json } from "remix";
import type { Brewery } from "../types/breweries";
import breweriesStylesUrl from "~/styles/breweries.css";

export let meta: MetaFunction = ({ data }) => {
  const query = data?.query
    ? `: ${data.query.replace("?query=", "")}`
    : " for beer";
  return {
    title: `🍺 Search${query}`,
    description: "This is the place to go to search for beer.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: breweriesStylesUrl }];
};

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let query = url.searchParams.get("query");
  if (query?.toLocaleLowerCase() === "gin") {
    throw new Response(`Sorry bub. No Gin here.`, { status: 422 });
  }
  try {
    const res = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${query}`
    );
    let breweries = await res.json();
    return json({ breweries, search: url.search });
  } catch (error) {
    throw new Response("Darn", { status: 422 });
  }
};

export default function Breweries() {
  const { breweries, search } =
    useLoaderData<{ breweries: Brewery[]; search: string }>();

  return (
    <div className="app__page breweries">
      <main>
        <h3>Route: /breweries</h3>
        <ul>
          {breweries.map((brewery) => (
            <li key={brewery.id}>
              <Link to={`${brewery.id}${search}`}>{brewery.name}</Link>
            </li>
          ))}
        </ul>
      </main>
      <Outlet />
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <h1>Caught</h1>
      <p>Status: {caught.status}</p>
      <pre>
        <code>{JSON.stringify(caught.data, null, 2)}</code>
      </pre>
    </div>
  );
}

export let ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};

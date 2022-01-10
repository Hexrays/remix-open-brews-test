import type { LoaderFunction } from "remix";
import { json } from "remix";

export let loader: LoaderFunction = async ({ request }) => {
  let url = new URL(request.url);
  let query = url.searchParams.get("query");
  const res = await fetch(
    `https://api.openbrewerydb.org/breweries/search?query=${query}`
  );
  let breweries = await res.json();
  return json(breweries);
};

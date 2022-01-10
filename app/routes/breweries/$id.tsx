import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData, redirect, Form, useActionData } from "remix";
import type { Brewery } from "../../types/breweries";
import breweryStylesUrl from "~/styles/brewery.css";

export let meta: MetaFunction = ({ parentsData, data, location, params }) => {
  return {
    title: `🍺 ${data.name}`,
    description: data.description,
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: breweryStylesUrl }];
};

export let loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://api.openbrewerydb.org/breweries/${params.id}`
  );
  let brewery = await res.json();
  const loremRes = await fetch("https://loripsum.net/api/1/plaintext");
  const description = await loremRes.text();
  brewery.description = description;
  return brewery;
};

export default function Brewery() {
  const brewery = useLoaderData<Brewery>();
  return (
    <aside className="brewery">
      <h3>Route: Breweries/Id</h3>
      <h3>{brewery.name}</h3>
      {brewery.website_url && <p>{brewery.website_url}</p>}
      <p>{brewery.brewery_type}</p>
      <p>{brewery.description}</p>
    </aside>
  );
}

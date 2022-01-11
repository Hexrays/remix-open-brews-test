import type { LinksFunction } from "remix";
import breweryStylesUrl from "~/styles/brewery.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: breweryStylesUrl }];
};

export default function BreweryIndex() {
  return (
    <aside className="brewery brewery-index">
      <h3>Route: /breweries/index.tsx</h3>
      <p>Search for a brewery.</p>
    </aside>
  );
}

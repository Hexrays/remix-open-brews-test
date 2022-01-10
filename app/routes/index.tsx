import type { MetaFunction, LinksFunction } from "remix";
import { Link } from "remix";
import homeStylesUrl from "~/styles/home.css";

export let meta: MetaFunction = () => {
  return {
    title: "🍺",
    description: "Search For Beer",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: homeStylesUrl }];
};

export default function Index() {
  return (
    <div className="home__container">
      <main>
        <h3>Route: Index</h3>
        <div className="mug">🍺</div>
        <Link to="breweries?query=good">Find Good Beer</Link>
      </main>
    </div>
  );
}

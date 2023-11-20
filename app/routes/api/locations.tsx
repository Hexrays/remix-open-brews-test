import { json } from "remix";
import { fakeLocations } from "~/models/test";

export async function loader() {
  return json({ data: fakeLocations });
}

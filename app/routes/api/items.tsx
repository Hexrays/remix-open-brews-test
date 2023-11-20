import { json } from "remix";
import { fakeItems } from "~/models/test";

export async function loader() {
  return json({ data: fakeItems });
}

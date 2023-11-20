import { json } from "remix";
import { fakeItems } from "~/models/test";

export async function loader() {
  return json(
    { data: fakeItems },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE",
      },
    }
  );
}

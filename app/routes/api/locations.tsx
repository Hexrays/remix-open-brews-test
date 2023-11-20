import { json } from "remix";
import { fakeLocations } from "~/models/test";

export async function loader() {
  return json(
    { data: fakeLocations },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE",
      },
    }
  );
}

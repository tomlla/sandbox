import { json, useLoaderData } from "@remix-run/react";

export async function loader() {
  console.log("aaaaaaaaaaa");
  const filename = __filename;
  console.log({ filename });
  return json({ filename });
}

export function A01Button() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <div>{JSON.stringify({ data }, null, 2)}</div>
      <button type="button" className="btn btn-primary border-2 px-4">
        Primary
      </button>
    </div>
  );
}

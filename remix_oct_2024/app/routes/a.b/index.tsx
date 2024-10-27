import { useParams } from "@remix-run/react";

export default function Index() {
  const p = useParams();
  return <div>aa{JSON.stringify({ p }, null, 2)}</div>;
}

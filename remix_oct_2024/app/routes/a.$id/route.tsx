import { useParams } from "@remix-run/react";

export default function Index() {
  const params = useParams();
  const { id } = useParams();
  return (
    <div>
      <div>{JSON.stringify({ p: params }, null, 2)}</div>
      <div>{JSON.stringify({ id }, null, 2)}</div>
    </div>
  );
}

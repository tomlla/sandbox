import type { MetaFunction } from "@remix-run/node";
import { A01Button } from "~/routes/a._index/A01Button";

export const meta: MetaFunction = () => {
  return [
    { title: "RemixApp /a" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>app/routes/a/route.tsx</div>
      <div>/a</div>{" "}
      <div>
        <A01Button />
      </div>
    </div>
  );
}

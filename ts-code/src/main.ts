import { isMain } from "@/cli/isMain";
import { from } from "./db"

export function add(a: number, b: number): number {
  return a + b;
}



console.log(`add(1, 2) = ${add(1, 2)}`);
import { fileURLToPath } from "url";

export function isMain():boolean {
  fileURLToPath(import.meta.url)

  // if (process.argv[1] === __filename) return true;

  return false;
}


// console.log({ isMain: isMain() });
console.log('import.meta', import.meta);
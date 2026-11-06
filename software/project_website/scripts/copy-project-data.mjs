import { cp, mkdir } from "node:fs/promises"
import { fileURLToPath } from "node:url"

// Keep department project-directory metadata available with the React deployment.
const source = fileURLToPath(new URL("../../../docs/data/", import.meta.url))
const destination = fileURLToPath(new URL("../dist/data/", import.meta.url))
await mkdir(destination, { recursive: true })
await cp(source, destination, { recursive: true })

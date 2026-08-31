import path from "path"
import fs from "fs"

export function findInPath(command) {
  const dirs = process.env.PATH.split(path.delimiter)

  for (const dir of dirs) {
    if (!dir) continue

    const dirPath = path.join(dir, command)
    try {
      fs.accessSync(dirPath, fs.constants.X_OK)
      return dirPath
    } catch (e) {

    }
  }

  return null
}
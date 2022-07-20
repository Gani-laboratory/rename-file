const fs = require("fs")
const path = require("path")
const readline = require("readline")

const rl = readline.createInterface(process.stdin, process.stdout)
rl.question("Enter the directory: ", (inputDir) => {
  if (!inputDir) throw new Error("input can't be empty")
  if (process.argv[2] === "prune") {
  } else {
  }
  const fullDir = path.join(process.env.HOME, inputDir)
  const files = fs.readdirSync(fullDir)

  rl.question("Enter the character you want to remove from name file: ", (rename) => {
    rl.question("Enter the character you want to change from removed character: ", (result) => {
      files.map((file) => {
        fs.renameSync(path.join(fullDir, file), path.join(fullDir, file.replace(new RegExp(rename, "g"), result)))
      })
      rl.close()
    })
  })
})

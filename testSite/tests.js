const jest = require("jest")
const { execSync } = require("child_process")

execSync("jekyll build")
jest.run()

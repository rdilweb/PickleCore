import fs from "fs"

describe("html tests", () => {
    it("outputted index.html", () => {
        expect(fs.existsSync("_site/index.html")).toBe(true)
    })
    
    it("index.html is the same as last time", () => {
        expect(fs.readFileSync("_site/index.html").toString()).toMatchSnapshot()
    })
})

import fs from "fs"

describe("blog tests", () => {
    it("outputted the example post", () => {
        expect(fs.existsSync("_site/2019/01/01/test.html")).toBe(true)
    })
    
    it("the post's html is the same as last time", () => {
        expect(fs.readFileSync("_site/2019/01/01/test.html").toString()).toMatchSnapshot()
    })
})

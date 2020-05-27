import fs from "fs"

describe("css tests", () => {
    it("outputted an assets/css directory", () => {
        expect(fs.existsSync("_site/assets/css/")).toBe(true)
    })

    it("page.css is the same as last time", () => {
        expect(fs.readFileSync("_site/assets/css/page.css").toString()).toMatchSnapshot()
    })
})

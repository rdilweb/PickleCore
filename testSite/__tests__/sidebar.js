import fs from "fs"

describe("sidebar tests", () => {
    it("outputted a page without the sidebar", () => {
        expect(fs.existsSync("_site/no-sidebar.html")).toBe(true)
    })
    
    it("confirms the page is the same", () => {
        expect(fs.readFileSync("_site/no-sidebar.html").toString()).toMatchSnapshot()
    })
})

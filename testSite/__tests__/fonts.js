import fs from "fs"

describe("font tests", () => {
    it("outputted an assets/fonts directory", () => {
        expect(fs.existsSync("_site/assets/fonts/")).toBe(true)
    })
    
    it("outputted Open Sans's license", () => {
        expect(fs.readFileSync("_site/assets/fonts/open-sans-license.txt").toString().includes("Apache")).toBe(true)
    })

    it("outputted all the proper formats of the font", () => {
        ["eot", "woff", "woff2", "svg", "ttf"].forEach((format) => {
            expect(
                fs.existsSync(`_site/assets/fonts/open-sans-v17-latin-regular.${format}`)
            ).toBe(true)
        })
    })
})

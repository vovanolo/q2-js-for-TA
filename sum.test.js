const sum = require("./sum.js");


describe("test sum file", () => {
    test("2 + 2 should be 4", () =>{
        expect(sum(2,2)).toBe(5);
    })
})

// 4 === 5
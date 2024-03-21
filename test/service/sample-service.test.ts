import { hello } from "@/service/sample-service.js"

describe("Sample Service", () => {
  it("should return Hello World!", () => {
    expect(hello()).toBe("Hello World!")
  })
})

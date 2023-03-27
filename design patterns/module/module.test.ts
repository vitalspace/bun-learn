import { myModule } from "./module";
import { describe, expect, test } from "bun:test";

describe("myModule", () => {
  test("sayPublic should log the private message to the console", () => {
    expect(myModule.sayPublic()).toBe("Hello world this is a private message");
  });
});

import { expect, it } from "vitest";
import { VAT_ID } from "@/data/legalIdentity";

it("uses the company VAT ID supplied by the user", () => {
  expect(VAT_ID).toBe("DE340481717");
});
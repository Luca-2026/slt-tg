import { describe, expect, it } from "vitest";
import { JOBS } from "@/data/jobs";

describe("Confirmed recruitment conditions", () => {
  it("both apprenticeships start on 01.08.2027", () => {
    const apprenticeships = JOBS.filter(job => job.isAzubi);
    expect(apprenticeships).toHaveLength(2);
    for (const job of apprenticeships) expect(job.startLabel).toBe("Ausbildungsbeginn: 01.08.2027");
  });
});
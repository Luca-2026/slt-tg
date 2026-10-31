import { describe, expect, it } from "vitest";
import { serviceModels } from "@/data/serviceModels";

describe("service conditions from the supplied model brief", () => {
  const basic = serviceModels.find(m => m.id === "basic");
  const plus = serviceModels.find(m => m.id === "plus");
  const enterprise = serviceModels.find(m => m.id === "enterprise");
  it("Basic renews automatically after a twelve-month term", () => expect(basic?.terms).toMatchObject({ minimumMonths: 12, automaticRenewal: true }));
  it("Plus starts remote analysis within four hours", () => expect(plus?.terms.remoteResponseHours).toBe(4));
  it("Plus provides onsite response within two business days", () => expect(plus?.terms.onsiteBusinessDays).toBe(2));
  it("Plus covers Monday to Friday", () => expect(plus?.terms.serviceWeekdays).toEqual([1, 2, 3, 4, 5]));
  it("Plus service begins at 08:00", () => expect(plus?.terms.serviceStart).toBe("08:00"));
  it("Plus service ends at 17:00", () => expect(plus?.terms.serviceEnd).toBe("17:00"));
  it("Plus requires twelve months before monthly cancellation", () => expect(plus?.terms).toMatchObject({ minimumMonths: 12, cancellationMonthsAfterMinimum: 1 }));
  it("Plus requires Teams Rooms Pro", () => expect(plus?.terms.teamsRoomsProRequired).toBe(true));
  it("Enterprise term is individually agreed", () => expect(enterprise?.terms.individuallyAgreedTerm).toBe(true));
  it("Enterprise prioritizes by incident class", () => expect(enterprise?.terms.responseByIncidentClass).toBe(true));
  it("Enterprise includes service credit for missed response", () => expect(enterprise?.terms.serviceCredit).toBe(true));
});
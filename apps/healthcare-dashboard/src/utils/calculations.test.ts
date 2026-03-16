import { calculatePatientAge } from "./calculations";

describe("calculatePatientAge", () => {
  beforeAll(() => {
    jest.useFakeTimers({ advanceTimers: true });
    jest.setSystemTime(new Date("2024-03-15"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("correctly calculates age based on DOB string", () => {
    const age = calculatePatientAge("1990-03-15");
    expect(age).toBe(34);
  });

  it("correctly calculates age when birthday has not occurred this year", () => {
    const age = calculatePatientAge("1990-12-15");
    expect(age).toBe(33);
  });
});

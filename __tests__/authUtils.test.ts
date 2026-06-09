import { describe, it, expect } from "vitest";
import { isUnauthorizedError } from "../client/src/lib/authUtils";

describe("isUnauthorizedError", () => {
  it("should return true for a 401 Unauthorized error", () => {
    const error = new Error("401: Unauthorized");
    expect(isUnauthorizedError(error)).toBe(true);
  });

  it("should return true for 401 with additional message", () => {
    const error = new Error("401: Unauthorized - session expired");
    expect(isUnauthorizedError(error)).toBe(true);
  });

  it("should return false for a 403 error", () => {
    const error = new Error("403: Forbidden");
    expect(isUnauthorizedError(error)).toBe(false);
  });

  it("should return false for a 500 error", () => {
    const error = new Error("500: Internal Server Error");
    expect(isUnauthorizedError(error)).toBe(false);
  });

  it("should return false for a generic error", () => {
    const error = new Error("Something went wrong");
    expect(isUnauthorizedError(error)).toBe(false);
  });

  it("should return false for an empty message", () => {
    const error = new Error("");
    expect(isUnauthorizedError(error)).toBe(false);
  });

  it("should return false for '401' without colon+space prefix", () => {
    const error = new Error("401 Unauthorized");
    expect(isUnauthorizedError(error)).toBe(false);
  });
});

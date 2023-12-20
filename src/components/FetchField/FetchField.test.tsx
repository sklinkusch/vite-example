import { Mock, describe, expect, it, vi } from "vitest";
import FetchField from "./FetchField";
import { render } from "../../../utils/test-utils";

globalThis.fetch = vi.fn();

/* eslint-disable-next-line */
function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("tests on FetchField", () => {
  it("calls a fetch", () => {
    const mockResponse = [{ name: "Marchbrücke", id: "000", distance: 42 }];
    (globalThis.fetch as Mock).mockResolvedValue(
      createFetchResponse(mockResponse)
    );
    render(<FetchField />);
    expect(fetch).toHaveBeenCalled();
  });
});

import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import StarWarsCharacter from "./StarWarsCharacters";

import { getData as mockGetData } from "../api";

jest.mock("../api");

test("StarWarsCharacter component renders correctly", async () => {
  mockGetData.mockResolvedValueOnce({
    next: "next_url",
    prev: "prev_url",
    results: [
      { test: "test 1", url: 1 },
      { test: "test 2", url: 2 }
    ]
  });

  const { getByText, queryAllByText, getByTestId } = render(
    <StarWarsCharacter />
  );

  const prevBtn = getByText("Previous");
  const nextBtn = getByText("Next");

  fireEvent.click(nextBtn);
  expect(mockGetData).toHaveBeenCalledTimes(1);
  expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");

  wait(() => {
    expect(getByTestId("character-div"));
    expect(queryAllByText(/Test people/i)).not.toBeNull();
  });

  fireEvent.click(prevBtn);
  expect(mockGetData).toHaveBeenCalledTimes(1);
  expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");

  wait(() => {
    expect(getByTestId("character-div"));
    expect(queryAllByText(/Test people/i)).not.toBeNull();
  });
});

import { mapStateToProps } from "./WordList";

describe("WordList", () => {
  it("mapState returns expected values", () => {
    const newValue = { arrayToList: 5 };
    const state = { a: 1, b: 2, c: 3, d: 4 };
    const expected = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      arrayToList: newValue.arrayToList
    };
    const result = mapStateToProps(state, newValue);

    expect(result).toEqual(expected);
  });
});

import { processData } from "./ProcessUtils";

test('process algorithm so that "hell" gives score -4', () => {
  const hellResult = {
    polarity: -4,
    positivity: 0,
    negativity: -4,
    positive: [],
    negative: ["hell"]
  };
  expect(processData("hell")).toStrictEqual(hellResult);
});

/* 
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
}); */

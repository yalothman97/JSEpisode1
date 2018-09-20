/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import { greet, oddsSmallerThan } from "./functions";

xdescribe("greet(name)", () => {
  test("logs 'Hello' if there is no name", () => {
    const spy = jest.spyOn(console, "log");
    greet();
    expect(spy).toHaveBeenCalledWith("Hello");
    spy.mockRestore();
  });

  test("logs 'Hello <name>' when there is a name", () => {
    const spy = jest.spyOn(console, "log");
    const names = ["Asis", "Lailz", "Mishmish"];

    names.forEach(name => {
      greet(name);
      expect(spy).toHaveBeenCalledWith(`Hello ${name}`);
    });

    spy.mockRestore();
  });
});

xdescribe("oddsSmallerThan(n)", () => {
  test("returns the correct number of odds", () => {
    const numbers = [0, 1, 9, 10, 345, 448758328540529];
    const results = [0, 0, 4, 5, 172, 224379164270264];
    numbers.forEach((n, i) => {
      console.log(n, i);
      expect(oddsSmallerThan(n)).toEqual(results[i]);
    });
  });
});

xdescribe("pairs()", () => {
  test("returns an empty array when passed nothing", () => {
    const result = pairs();
    expect(result).toEqual([]);
  });

  test("returns an empty array when passed an empty array", () => {
    const result = pairs([]);
    expect(result).toEqual([]);
  });

  test("returns an array with a single pair of items when passed an array with just two items", () => {
    const names = ["asis", "hamsa"];
    const result = pairs(names);
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(2);
    expect(result[0].includes("asis")).toBe(true);
    expect(result[0].includes("hamsa")).toBe(true);
  });

  test("returns an array of pairs when passed multiple names", () => {
    const names = ["asis", "hamsa", "fawas", "mishmish"];
    const result = pairs(names);
    expect(result.length).toBe(2);
    expect(result.every(pair => pair.length == 2)).toBe(true);
  });

  test("is randomized", () => {
    let names = ["asis", "hamsa", "fawas", "mishmish"];
    let pairsets = [...Array(10)].map(() => pairs(names.slice(0)));
    expect(
      pairsets.every(
        pairset => JSON.stringify(pairset) === JSON.stringify(pairsets[0])
      )
    ).toBe(false);
  });

  test("can handle an odd number of names, the last array contains only one name", () => {
    let names = ["asis", "hamsa", "fawas", "mishmish", "hussein"];
    let result = pairs(names);
    let last = result.pop();
    expect(last.length).toBe(1);
  });
});

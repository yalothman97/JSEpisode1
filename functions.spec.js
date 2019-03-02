/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate
} from "./functions";

describe("greet(name)", () => {
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

describe("isOdd(n)", () => {
  test("returns true if the number is odd", () => {
    const numbers = [1, 9, 3456087];
    numbers.forEach(n => expect(isOdd(n)).toBe(true));
  });

  test("returns false if the number is even", () => {
    const numbers = [2, 10, 3456088];
    numbers.forEach(n => expect(isOdd(n)).toBe(false));
  });
});

describe("oddsSmallerThan(n)", () => {
  test("returns the correct number of odds", () => {
    const numbers = [0, 1, 9, 10, 345, 448758328540529];
    const results = [0, 0, 4, 5, 172, 224379164270264];
    numbers.forEach((n, i) => expect(oddsSmallerThan(n)).toBe(results[i]));
  });
});

describe("squareOrDouble(n)", () => {
  test("squares odd numbers", () => {
    const numbers = [1, 9, 99];
    const results = [1, 81, 9801];
    numbers.forEach((n, i) => expect(squareOrDouble(n)).toBe(results[i]));
  });

  test("doubles even numbers", () => {
    const numbers = [2, 10, 100];
    const results = [4, 20, 200];
    numbers.forEach((n, i) => expect(squareOrDouble(n)).toBe(results[i]));
  });
});

fdescribe("ageFromBirthDate(birthDate)", () => {
  test("returns the correct age", () => {
    const today = new Date();
    let month = new Date().getMonth() - 2;
    month = month < 1 ? 12 : month;
    const birthDates = [`1987${month}05`, `1985${month}27`, `1998${month}05`];
    const dates = [`06/${month}/1987`, `08/${month}/1985`, `06/${month}/1998`];
    const results = dates.map(date => {
      const dob = new Date(date);
      return today.getFullYear() - dob.getFullYear();
    });
    birthDates.forEach((birthDate, i) =>
      expect(ageFromBirthDate(birthDate)).toBe(results[i])
    );
  });

  test("rounds down to the nearest year", () => {
    let currentMonth = new Date().getMonth() + 2;
    let yearOffset = 0;
    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
    if (currentMonth > 12) {
      currentMonth = 1;
      yearOffset = 1;
    }
    const birthDates = [
      `${1987 + yearOffset}${currentMonth}05`,
      `${1985 + yearOffset}${currentMonth}05`,
      `${1998 + yearOffset}${currentMonth}05`
    ];
    const dates = [
      `${currentMonth}/05/${1987 + yearOffset}`,
      `${currentMonth}/05/${1985 + yearOffset}`,
      `${currentMonth}/05/${1998 + yearOffset}`
    ];
    const results = dates.map(date => {
      const today = new Date();
      const dob = new Date(date);
      return today.getFullYear() - dob.getFullYear() - 1;
    });

    birthDates.forEach((birthDate, i) =>
      expect(ageFromBirthDate(birthDate)).toBe(results[i])
    );
  });
});

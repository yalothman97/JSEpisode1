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
  ageFromCivilID,
  canVoteInKuwait
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

describe("ageFromCivilID(civilID)", () => {
  test("returns the correct age", () => {
    const civilIDs = ["287060512345", "285082712345", "298060512345"];
    const dates = ["06/05/1987", "08/27/1985", "06/05/1998"];
    const results = dates.map(date => {
      const today = new Date();
      const dob = new Date(date);
      return today.getFullYear() - dob.getFullYear();
    });
    civilIDs.forEach((civilID, i) =>
      expect(ageFromCivilID(civilID)).toBe(results[i])
    );
  });

  test("rounds down to the nearest year", () => {
    let currentMonth = new Date().getMonth() + 2;
    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
    const civilIDs = [
      `287${currentMonth}0512345`,
      `285${currentMonth}0512345`,
      `298${currentMonth}0512345`
    ];
    const dates = [
      `${currentMonth}/05/1987`,
      `${currentMonth}/05/1985`,
      `${currentMonth}/05/1998`
    ];
    const results = dates.map(date => {
      const today = new Date();
      const dob = new Date(date);
      return today.getFullYear() - dob.getFullYear() - 1;
    });

    civilIDs.forEach((civilID, i) =>
      expect(ageFromCivilID(civilID)).toBe(results[i])
    );
  });

  test("takes into account the century", () => {
    const civilIDs = [
      "300060512345",
      "318082712345",
      "199082712345",
      "245060512345"
    ];
    const dates = ["06/05/2000", "08/27/2018", "08/27/1899", "06/05/1945"];
    const results = dates.map(date => {
      const today = new Date();
      const dob = new Date(date);
      return today.getFullYear() - dob.getFullYear();
    });
    civilIDs.forEach((civilID, i) =>
      expect(ageFromCivilID(civilID)).toBe(results[i])
    );
  });
});

describe("canVoteInKuwait(civilID, isKuwaiti, isRoyal)", () => {
  test("returns false if the age is under 21", () => {
    let year = (new Date().getFullYear() - 18) % 100;
    const civilID = `3${year < 10 ? `0${year}` : year}010512345`;
    expect(canVoteInKuwait(civilID, true, false)).toBe(false);
  });

  test("returns false if the person is not Kuwaiti", () => {
    let year = (new Date().getFullYear() - 50) % 100;
    const civilID = `2${year < 10 ? `0${year}` : year}010512345`;
    expect(canVoteInKuwait(civilID, false, false)).toBe(false);
  });

  test("returns false if the person is from the royal family", () => {
    let year = (new Date().getFullYear() - 50) % 100;
    const civilID = `2${year < 10 ? `0${year}` : year}010512345`;
    expect(canVoteInKuwait(civilID, true, true)).toBe(false);
  });

  test("returns true if the person meets all criteria", () => {
    let year = (new Date().getFullYear() - 50) % 100;
    const civilID = `2${year < 10 ? `0${year}` : year}010512345`;
    expect(canVoteInKuwait(civilID, true, false)).toBe(true);
  });
});

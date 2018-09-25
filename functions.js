/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  let message = "Hello";
  if (name) {
    message += ` ${name}`;
  }

  console.log(message);
}

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  return !!(n % 2);
}

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  if (isOdd(n)) {
    n--;
  }

  return n / 2;
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd(n)) {
    return n * n;
  } else {
    return n * 2;
  }
}

/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate(19870506) -> 31 (because the birthday already passed)
 *    ageFromBirthDate(19971110) -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

  const year = birthDate.slice(0, 4);
  const month = birthDate.slice(4, 6);
  const day = birthDate.slice(6);

  const today = new Date();
  const dob = new Date(`${month}/${day}/${year}`);

  let age = today.getFullYear() - dob.getFullYear();

  if (
    dob.getMonth() > today.getMonth() ||
    (dob.getMonth() === today.getMonth() && dob.getDate() > today.getDate())
  ) {
    age--;
  }

  return age;
}

module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate
};

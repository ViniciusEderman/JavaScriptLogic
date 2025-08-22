function nextHappyYear(year) {
  while (true) {
    year++;
    const yearToString = year.toString();
    const uniqueDigits = new Set(yearToString);

    if (uniqueDigits.size === yearToString.length) {
      console.log(year)
      return year;
    }
  }
}

nextHappyYear(1001);
function checkLeapYear(year) {
    if (year <= 0) {
        console.log("year needs be > 0");
        return 'year needs be > 0';
    }

    const isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

    console.log(isLeap);
    return isLeap;
}

checkLeapYear(2012)
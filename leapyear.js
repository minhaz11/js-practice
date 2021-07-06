function leapYear(year) { 
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function isLeap(year) {
    return new Date(year, 1, 29).getDate() === 29;
}

console.log(leapYear(2100),isLeap(1984));
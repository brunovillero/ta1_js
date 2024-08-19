function leapYears(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(leapYears(2001));
console.log(leapYears(2004));
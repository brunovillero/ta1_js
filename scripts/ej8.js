function findTheOldest(people){
    const oldestPeople = people.sort(function(a,b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    });
    return oldestPeople[0];
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "George",
        yearOfBirth: 1932,
        yearOfDeath: 1971,
    },
    {
        name: "Kelly",
        yearOfBirth: 1945,
        yearOfDeath: 1988,
    }
];

console.log(findTheOldest(people));
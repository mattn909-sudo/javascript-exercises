const findTheOldest = function(person) {
    const date = new Date();
    const oldest = person.sort((a,b) => {
        let lastGuy = 0;
        let nextGuy = 0;
        "yearOfDeath" in a ? lastGuy = a.yearOfDeath - a.yearOfBirth : lastGuy = date.getFullYear() - a.yearOfBirth;
        "yearOfDeath" in b ? nextGuy = b.yearOfDeath - b.yearOfBirth : nextGuy = date.getFullYear() - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};


// Do not edit below this line
module.exports = findTheOldest;


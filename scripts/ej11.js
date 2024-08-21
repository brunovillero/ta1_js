function duplicates(numArray){
    let counter = 0;
    const counts = {};

    numArray.forEach((value) => {
        if (!counts[value]) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
    });

    for (let value of Object.keys(counts)) {
        if(counts[value] > 1){
            counter++;
        }
    }

    return counter;
}

const numArray = [1, 2, 2, 3, 4, 4, 4, 5, 3, 5];

console.log(duplicates(numArray));
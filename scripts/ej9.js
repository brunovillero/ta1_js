function getOdds(numArray){
    return numArray.filter(n => n%2);
}

const numArray = [1,2,3,4,5,6,7,8,9,10,11];

console.log(getOdds(numArray));
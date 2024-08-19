function getSum(arrayNum){
    return arrayNum.reduce(function (a,b){
        return a + b;
    }, 0);
}

const numArray = [1,2,3,4,5,6];

console.log(getSum(numArray));
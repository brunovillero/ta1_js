function sumAll(numA, numB){
    let result = 0;
    for (let index = numA; index <= numB; index++) {
        result += index;
    }
    console.log(result);
}

sumAll(1, 5);
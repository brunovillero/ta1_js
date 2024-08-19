function convertToCelsius(temp){
    return ((temp - 32) * (5/9)).toFixed(1);
}

function convertToFahreinheit(temp){
    return ((temp * (9/5)) + 32).toFixed(1);
}

console.log(convertToCelsius(100));
console.log(convertToFahreinheit(35));
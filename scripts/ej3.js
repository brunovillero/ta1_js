function removeFromArray(array, item){
    let arrayCopy = array;
    let indexItemToRemove = array.indexOf(item);

    let lastItem = array[array.length - 1];
    arrayCopy[indexItemToRemove] = lastItem;
    arrayCopy[array.length - 1] = item;
    arrayCopy.pop();

    console.log(arrayCopy);
}

removeFromArray([1,2,3], 2);
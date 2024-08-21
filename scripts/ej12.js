function generatePassword(length){
    if(length < 8){
        length = 8;
    }

    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$!_*';

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}

console.log(generatePassword(9));
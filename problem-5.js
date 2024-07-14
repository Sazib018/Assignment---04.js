// Task problem - 5 ::::

function canPay(array , number) {
    let total = [];

    for (let i = 0; i < array.length; i++) {
       total += array[i];
       array <= number;
       return true
        
    }
    if (number < array) {
        return false  
    }
    return 'please check your array element'
    
}
const noteArray = [1, 2, 5];
const sumNote = 10;
const totalCase = canPay(noteArray , sumNote);
console.log(totalCase);
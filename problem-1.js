// Task-1::::

function cubeNumber(input) {
    if (typeof input == "number" && input<=0) {
        return 'please add number'
    }
    return input **3;
}
const numbers = 4 ;
const output = cubeNumber(numbers);
/* console.log(output); */

// Task Problem - 3 ::::

function sortMaker(array) {
    const [one , two] = array;
    if (one < 0 || two < 0) {
       return "Invalid Input "; 
    }
    else if(one === two) {
        return "equal";
    }
    else{
        return [Math.max(one , two), Math.min(one , two)];
    }
}
const input1 = sortMaker([2, 3]);
const input2 = sortMaker([4, 2]);
const input3 = sortMaker([4, 4]);
const input4 = sortMaker([1, 2]);
const input5 = sortMaker([4, -2]);

/* console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);
console.log(input5); */
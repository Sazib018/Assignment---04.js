// Task problem - 5 ::::

function canPay(array , number) {
    if (array.length === 0) {
        return 'please do not use empty array'
    }
    else{
        let totalTaka = 0;
        for (let i = 0; i < array.length; i++) {
            const taka = array[i];
            totalTaka = taka + totalTaka;
        }
        if (totalTaka === number || totalTaka > number) {
            return true
        }
        else{
            return false
        }
    }
}

const peramiter  = canPay ([1,5,5],10);
console.log(peramiter);
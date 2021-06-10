function check() {

    let v = document.getElementById('inputnumber').value;

    let checkpoint = 0;

    for (let element of v.split(',')) {

        let isPrimeNum = false;

        element = parseFloat(element);
        if (element > 1) {
            if (isPrime(element)) {
                checkpoint += 5;
                isPrimeNum = true;
            }
        }
        if (!isPrimeNum) {
            if (element % 2 == 0) {
                checkpoint += 1;
            } else checkpoint += 3;

        }
    }

    document.getElementById("total").value = checkpoint;

}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i == 0)
            return false;
    return true;
}

function checkSum() {

    let v = document.getElementById('inputNum').value;
    let sumEven = []
    let sumOdd = []

    for (let element of v.split(',')) {
        element = parseFloat(element);
        if (element % 2 == 0) {
            sumEven.push(element);

        } else sumOdd.push(element);
    }

    //Sum Even number
    document.getElementById("showsumeven").value = sumEven.reduce(sumAllNumbers);

    //Sum Odd number
    document.getElementById("showsumodd").value = sumOdd.reduce(sumAllNumbers);

    //Even number - Odd number
    document.getElementById("showsum").value = parseFloat(document.getElementById("showsumeven").value) - parseFloat(document.getElementById("showsumodd").value)

}

function sumAllNumbers(a, b) {
    return a + b;
}

function sortMinMax() {

    let v = document.getElementById('inputNumbers').value;


    let Numbers = [];

    v = v.split(',');

    for (let element of v) {
        element = parseFloat(element);
        Numbers.push(element);
    }

    // Find Min & Max
    maxNum = Math.max(...Numbers);
    minNum = Math.min(...Numbers);

    document.getElementById("showmax").value = maxNum;

    document.getElementById("showmin").value = minNum;

    document.getElementById("showsort").value = sortArray(Numbers);

}

function sortArray(v) {

    for (let i = 0; i < v.length; i++) {
        for (let j = i; j < v.length; j++) {
            if (v[j] < v[i]) {
                let a = v[j];
                v[j] = v[i];
                v[i] = a;
            }
        }
    }
    return v;
}
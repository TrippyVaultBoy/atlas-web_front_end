function countPrimeNumbers() {
    numberOfPrimes = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let x = 2; x < i; x++) {
            if (i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            numberOfPrimes++;
        }

    }
    return numberOfPrimes;
}

let startTime = performance.now();
let numPrimes = countPrimeNumbers();
let endTime = performance.now();

let executionTime = endTime - startTime;

console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
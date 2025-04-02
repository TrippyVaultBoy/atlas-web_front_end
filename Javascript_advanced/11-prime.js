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

setTimeout(() => {
    let startTime = performance.now();
    for (let y = 0; y < 100; y++) {
        countPrimeNumbers();
    }
    let endTime = performance.now();

    let executionTime = endTime - startTime;

    console.log(`Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`);
}, 0);
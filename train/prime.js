export function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            }
        }
        isPrime ? console.log(`Число ${num} is Prime`) : console.log(`Число ${num} is not Prime`)
    } else if (num > 1000 || num < 1) {
        console.log(`Число выходит за пределы возможной проверки нашей программы`)
        isPrime = `We can't work with this`
    }
    return isPrime
}
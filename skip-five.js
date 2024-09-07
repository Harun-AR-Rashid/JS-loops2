/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
let number = 55;
while (number <= 85) {
    // console.log(number);
    if (number % 2 !== 0 && number % 5 !== 0) {
        console.log(number);
    }
    number++;
}
console.log('------skip-end-line------')
for (let i = 55; i <= 85; i++) {
    if (i % 2 !== 0 && i % 5 !== 0) {
        console.log(i);
    }
}
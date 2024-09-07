/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// let number = 1;
// let sum = 0;
// while (number <= 100) {
//     console.log(number);
//     sum = sum + number;
//     console.log(sum);
//     if (sum === 100 || sum >= 100) {
//         console.log(sum);
//         break;
//     }
//     number++;
// }
// console.log('Sum reaches it conditions', sum)
// using for loops
let sumr = 0;
for (i = 1; i <= 100; i++) {
    console.log(i);
    sumr = sumr + i;
    console.log(sumr);
    if (sumr === 100 || sumr >= 100) {
        console.log(sumr);
        break;
    }
}
console.log('Sum reaches its conditions', sumr)
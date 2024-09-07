/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
let harun = 1;
while (harun <= 40) {
    // console.log(harun);
    harun++;
    if (harun % 2 == 0) {
        console.log(harun);
        continue;
    }

}
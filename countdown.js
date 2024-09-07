/***

Implement a countdown timer that counts down from 21 to 15.

 */
// let count = 60;
// const timer = setInterval(function() {
//   count--;
//   console.log(count);
//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Time's up!");
//   }
// }, 1000)


let roll = 89;
const harun = setInterval(() => {
    roll++;
    console.log(roll);
    if (roll === 100) {
        clearInterval(harun);
        console.log('Lucky Harun and Halima')
    }
}, 1000);
/*programming hero*/
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// for (let i = 3; i <= 100; i++) {
//     if (Math.sqrt(i) % 1 === 0) {
//         console.log(i);
//         break;
//     }
// }
for (let i = 100; i >= 1; i--) {
  // Check if the number is a perfect square
  if (Math.sqrt(i) % 1 === 0) {
    console.log(i);
    continue;
  }
}
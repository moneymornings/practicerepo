//3.Remove duplicate members from any array provided. Solution must successfully remove duplicates from any array provided. Print the resulting array with the removed values to the screen.

// const array1 = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 10, 5];

// for ( let i=0; i<array1.length;i++){
//     if (array1[i] === array1[i]){
//         array1.splice(array1[i]);
//     }

//     // console.log(array1[i]);
// }

//4.from a unsorted array, check whether there are any two numbers that will sum up to a given number. For example, if the given number is 12, are there a combination of numbers (3,9), (5,7), (10, 2), etc that will add to 12. Print the two numbers that add to the given number.

let magic = 6;
let numbers = [4, 3, 2, 1, 5, 9, 0];

for (i = 0; i < numbers.length; i++) {
  for (j = 0; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] == 6) {
      console.log(numbers[i], numbers[j]);
    }
  }
}
let target = 6;
let array1 = [4,3,2,1,5,9,0];

function addSum(arr, target){
    for(i=0; i < arr.length; i++){
        for(j=i+1; j < arr.length;j++){
            if(arr[i]+ arr[j] === target){
                console.log('pair found: ('+arr[i]+', '+arr[j]+')')
            }
        }
    }
 console.log('pair not found')   
}

addSum(array1, target)

// 2.A company example of this is 'SONOS' whose product can be flipped upside down, turned left or right and it still says the company name. Your code should accept a single string and print true if it is a palindrome and false otherwise

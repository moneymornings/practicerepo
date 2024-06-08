// High seed plays low seed, ex: 1 -> 16, 2 -> 15, 3 -> 14, etc
// Every region should be in the following order: [1,16,8,9,5,12,4,13,6,11,3,14,7,10,2,15]
// Games are played between two teams where i plays i + 1 (i.e) the provided array must be sorted by bracket
// After each game, remove the team that lost from the array

let east = [
  {
    school: "UConn",
    seed: 1,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Stetson",
    seed: 16,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "FAU",
    seed: 8,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Northwestern",
    seed: 9,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "San Diego St.",
    seed: 5,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "UAB",
    seed: 12,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Auburn",
    seed: 4,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Yale",
    seed: 13,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "BYU",
    seed: 6,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Duquesne",
    seed: 11,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Illinois",
    seed: 3,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Morehead St.",
    seed: 14,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Washington St.",
    seed: 7,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Drake",
    seed: 10,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Iowa St.",
    seed: 2,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "South Dakota St.",
    seed: 15,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
];

let west = [
  {
    school: "North Carolina",
    seed: 1,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Wagner",
    seed: 16,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Mississippi St.",
    seed: 8,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Michigan St.",
    seed: 9,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "St. Mary's",
    seed: 5,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Grand Canyon",
    seed: 12,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Alabama",
    seed: 4,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Charleston",
    seed: 13,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Clemson",
    seed: 6,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "New Mexico",
    seed: 11,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Illinois",
    seed: 3,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Morehead St.",
    seed: 14,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Washington St.",
    seed: 7,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Drake",
    seed: 10,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "Iowa St.",
    seed: 2,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
  {
    school: "South Dakota St.",
    seed: 15,
    score: Math.ceil(Math.random() * (80 - 45) + 45),
  },
];

// Bracket Before Games Played
console.log(east);

// Keep track of each index that needs to be removed, pass indices to the filter method to delete all at once
// After we have accessed who lost remove the losing teams using method of your choice filter(), includes(), etc

// The below code was written by good Dre. Good Dre makes sure his code is readable
// by everyone and comments things that may be difficult to understand. However,
// good Dre doesn't give answers for free so he shows others how to solve things one
// step at a time but expects junior devs to put in the work to learn how to solve the
// rest of the problem.

function playRound(region) {
  for (let i = 0; i + 1 < region.length; i = i + 2) {
    if(region[i].score > region[i + 1].score) {
      // Splice can remove an element from an array
      region.splice(i + 1, 1);
      // We need to decrement i by 1 because we just removed a school. Failing to do
      // this leads us to skip over a school in the match pairing
      i--;
    } else {
      region.splice(i, 1);
      i--;
    }
  }
  // Bracket after round is played
  console.log(region);
}

playRound(east);

//--------------------------------------------------------------------------------
// The below code was written by evil Dre. He wants to prove he's smarter than all
// the junior devs and writes code in as little lines as possible despite it being
// difficult to read. The entire backend for the bracket challenge was written in
// 11 lines. Don't be like evil Dre.

// function playRound(region) {
//   if (region.length === 1) {
//       return `${region[0].school} are your 2024 EAST NCAA Champions!`;
//   } else {
//       for (let i = 0; i + 1 < region.length; i = i + 2) {
//         region[i].score > region[i + 1].score ? region.splice(i-- + 1, 1): region.splice(i--, 1);
//       }
//       console.log(region);
//   }
//   return playRound(region);
// }

// console.log(playRound(east));


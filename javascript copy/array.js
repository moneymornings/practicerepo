// let musicGenres = ['Rap', 'Rock','Pop', 'Country']

// musicGenres.push('Gospel')
// console.log(musicGenres);


// let genreOne = 'Rap'
// let genreTwo = 'Rock'
// let genreThree = 'Pop'
// let genreFour = 'Country'

// let musicGenres =[genreOne, genreTwo, genreThree,genreFour]
// musicGenres.push(genreFive="Gospel");
// console.log(musicGenres);

// let musicGenres = ['Rap', 'Rock','Pop', 'Country']

// musicGenres[0] = 'R&B';
// musicGenres[5] = "Heavy Metal"
// console.log(musicGenres[0], musicGenres[5]);

// let musicGenres=[
//     ['Rap', 'Hip Hop', 'Trap-Soul'],
//     ['R&B', 'Gospel', 'Jazz'],
//     ['Soft-Pop', 'Pop', 'Country'],

// ]

// //Retrieve the genre at index 1 of the array at index 2 

// console.log(musicGenres[2][1]);

// //Retrieve the genre at index 0 of the array at index 0 

// console.log(musicGenres[0][0]);

//splice!//
//array.splice(start, itemCount, item1, item2,...);
//-start: the array index at which the insertion and or removal is to begin
//-itemCount: (optional to include, but if no item to remove then put 0) 
// The number of elements in the array to remove/replace beginning at start.
//-item1, item2, ...: The elements that will be inserted into the array at start 
//if only the start index is provided then it will remove all the elements from start 
//to the end of the arry
//a negative start (-1) indicates an offset from the end of an array 

// let daysOfWeek = ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday'];


// daysOfWeek.splice(5, 0, 'Saturday', 'Sunday');
// console.log(daysOfWeek);


//more splicing//
let daysOfWeek =[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'September',
    'August',
    'Friday',
    'Saturday',
];

daysOfWeek.splice(4,2);
daysOfWeek.splice(5,1,'SATURDAY OOH OOOH');
console.log(daysOfWeek);


let myfaves =[

    'Ms Potter',
    'Ms Smith',
    'Principal Lucas',
    'Mr Abuso',
    'Mr Winsett',
    'Ms Lafferty',
    'Ms Hill',
    'Principal Novak',
]

myfaves.splice(2,1);
myfaves.splice(6,1);
console.log(myfaves);


let bags =[
    'louis vuitton',
    'coach',
    'berkin',
    'marc jacobs',
    'prada',
    'dior',
    'dolce & gabana',  
]

bags.splice(6,1, 'Burberry')
console.log(bags)

let todolist =[
    'take out trash',
    'buy baby clothes',
    'grocery store run',
    'home depot run',
    'shower',
    'feed dog',
    'wash car',  
]

todolist.splice(4,1,1,'feed homeless')
console.log(todolist)

// //functions//
// function itsMe(){
//     console.log('Its me chickens!');
// }

// itsMe();


// function walkthedog(){
//     console.log('8am, 5pm, 10pm');
// }

// walkthedog();

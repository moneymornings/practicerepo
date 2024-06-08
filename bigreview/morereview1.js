// let team = ["Ashley", "Jessie", "Gabriel", "Dre"]


// team.push("Zach")

// team.push(["Justin","Zakai", "David", "Joel" ])

// console.log(team.[2]);



// for(i=0; i<team.length; i++){
//     if(team.[1] >)
// }


//filter array method//

let items =[
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},

]
// to filter items out of an array you use .filter(), 
//example here we are filtering items less than or equal to $100//
//set variable equal to array.filter() inside the filter function you pass the variable item and set it 
//greater than or equal to { return the price that is less than or equal to 100})

//returns true or false for each item if its true its in the new array and if its false its not in the new array
// let filteredItems = items.filter((item) => {
// return item.price <= 100
// })

// console.log(filteredItems);

// let filteredItems = items.filter((items)=>
//     {if (items.price <= 100){
//         return items

//     }
//     })

//     console.log(filteredItems)

    // let filteredItems2 = items.filter((items) =>
    // {if (items.price >= 200){
    //     return items
    // }
    
    // })

    // console.log(filteredItems2)


    //--------------------------------------//

    //dom manipulation :)//


    let body = document.body
    let div = document.createElement("div")
    body.append(div)
    div.innerText = "Hello it's Thursday"


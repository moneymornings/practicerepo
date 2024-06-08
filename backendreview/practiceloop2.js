const familyTree = [

    ["Barbara Davis", 'Jim Davis'],
    ['Selwyn Davis', 'Maurice Davis'],

    ['Avis McRae', 'Butch Clayton'],

    ['Yolanda Boyce', 'Donna McRae', 'Felton McRae', 'Tara McRae', 'Cynthia Davis','Marinda Duncan'],
    
    ['Vincent Thompson'],
    ['London Maloney', 'Autumn Heyward'],
    ['Dominic Clifton', 'Amber Clifton'],
    ['Marcello Davis', 'Maurice Davis Jr.'],
    ['Ashley Davis', 'Tyler Davis'],
    ['Bryanna Duncan', 'Kyla Duncan', 'Diane Duncan']

];



//Print all family members with D in their first name 

// for(i=0; i < familyTree.length; i++){ //step 1 - run for loop through the first/outer array -familyTree
//     const family = familyTree [i]; //step 2 - store every name from the entire array:familyTree into family

//     for(j=0; j< family.length; j++){//step 3 - run the loop through the second/inner family array - 
//         const members = family[j];  //step 4 - store every family member from all individual arrays into members

//     //step 5: Create If statement - 
//      if(members.split(' ') [1][0] === 'M'){ // if family member first name starts with D print to console
//         console.log(members)
//      }
    
//     }

// }

//
//Print the Davis family 

    for(i=0; i<familyTree.length; i++){

        const family = familyTree[i];

        for(j=0; j<family.length; j++);
        const members = family[j];


            if (members.split(' ') [1]['Davis'] === 'Davis'){
            console.log(lastName);

            }

        };
    

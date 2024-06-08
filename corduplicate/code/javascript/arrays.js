// Organize all Southeastern conference schools by division

// City, State, student population, year founded

let UGA = {
    city: "Athens",
    state: "GA",
    population: 40118,
    founded: 1785
};

// To access properties inside of an object we use dot notation
console.log(UGA.population);

let UF = {
    city: "Gainesville",
    state: "FL",
    population: 60795,
    founded: 1853
};

let UK = {
    city: "Lexington",
    state: "KY",
    population: 30473,
    founded: 1865
};

let TN = {
    city: "Knoxville",
    state: "TN",
    population: 28321,
    founded: 1794
};

let USC = {
    city: "Columbia",
    state: "SC",
    population: 34731,
    founded: 1801
};


let secEast = [UGA, UF, UK, TN];

console.log(secEast);
secEast.push(USC);
console.log(secEast);






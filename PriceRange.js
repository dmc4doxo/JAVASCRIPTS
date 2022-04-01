
let priceRange = [ 
    {label : '$', tooltip:'Inexpensive', minPerPrice:0, maxPerPrice : 10},
    {label : '$$', tooltip:'Moderate', minPerPrice:11, maxPerPrice : 20},
    {label : '$$$', tooltip:'Expensive', minPerPrice:21, maxPerPrice : 50} 
];

let restaurants = [ { avereagePerPerson: 5}];

listProperties(priceRange)

function listProperties(priceRange){
    for (key in priceRange)
    console.log(priceRange[key])
}

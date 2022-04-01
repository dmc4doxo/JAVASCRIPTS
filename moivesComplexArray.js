
const movies =[
    {title: 'a', year : 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];
// All the movies in 2018 with rating >4
// sort them by their rating in descending order
// Display their title in console.
//

//create a new array of only movies in 2018: movies18 
//sort movies18 by property rating.
// console log the property title.

titles = movies                             // chain properties.
.filter(m=>m.year ===2018 && m.rating >=4)
.sort((a,b)=> a.rating - b.rating)         // this has to be positive - sort is ascending -so we have to reverse for descending        
.reverse()                                 //descending
.map(m=>m.title)

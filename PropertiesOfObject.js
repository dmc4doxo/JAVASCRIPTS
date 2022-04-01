
const movie = {
    Title: 'Mack Attack',
    Release_year:1989,
    Director:'Mack Coulibaly',
    Budget:'$33M',
    Rating: 4.3,
    Award: "US Academy"
    };
    
    showProperties(movie);
    
    function showProperties (object){
        for (let key in object) {
        if (typeof object[key] === 'string')
        console.log(key,':', object[key]);
        }
    }
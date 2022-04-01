
const courses = [
    {id:1, name: 'a'},
    {id:2, name: 'b'},
    {id:3, name: 'c'}
];

const course = courses.find(course=>course.name==='b');
// find a course whose name is equal to b. 
console.log(course)

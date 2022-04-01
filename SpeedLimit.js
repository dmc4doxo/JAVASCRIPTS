
checkSpeed(120);

 function checkSpeed(speed){
  const speedLimit = 70;
    const kmPerPoint = 5;
if (speed < (speedLimit + kmPerPoint)){
    console.log("OK");
    return;
}
const points = Math.floor((speed - speedLimit)/kmPerPoint);
//console.log(points + "", "points");
if (points >= 12)
    console.log("License Suspended")
else
    console.log('Warning ** Point', points);

}
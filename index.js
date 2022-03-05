let hour_hand = document.getElementById("hour_hand");
let minute_hand = document.getElementById("minute_hand");


  const d = new Date();
  var hour = d.getHours();
  var minutes = d.getMinutes();


console.log(minutes);
console.log(hour % 12);

// minute hand logic
let initialPosition = ((minutes * 6) % 360) ;

minute_hand.style.transform = `rotate(${initialPosition}deg)`;

let interval = setInterval(() => {
  initialPosition = (initialPosition + 6) % 360;
  console.log(initialPosition + " " + "initialPosition");
  minute_hand.style.transform = `rotate(${initialPosition}deg)`;
}, 1000 * 60);

//hour hand logic
let initialHOUR = (((hour+ (minutes/60)) * 360)/ 12) % 360;

console.log(initialHOUR + "initialHOUR");

let hourHand_position = initialHOUR ;

console.log(hourHand_position + "hourhandPosition");

hour_hand.style.transform = `rotate(${hourHand_position}deg)`;

let interval1 = setInterval(() => {
  hourHand_position = (hourHand_position + 0.5) % 360;
  console.log(hourHand_position + "  " + "hourHand_position");
  minute_hand.style.transform = `rotate(${hourHand_position}deg)`;
}, 1000 * 60);


setTimeout(function(){
    window.location.reload(1);
    console.log(minutes);
 }, 10000);
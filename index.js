let hour_hand = document.getElementById("minute_hand");

const d = new Date();
let hour = d.getHours();
let minutes = d.getMinutes();

console.log(minutes);
console.log(hour % 12);
// initial position of minute hand
let initialPosition =((minutes) * 6 ) % 360  + 90  ;

hour_hand.style.transform =  `rotate(${initialPosition}deg)`




let interval = setInterval(() => {
     
    
     initialPosition = (initialPosition + 6) % 360
     console.log(initialPosition);
     hour_hand.style.transform = `rotate(${initialPosition}deg)`;
}, 1000 * 60 );


let initialHOUR
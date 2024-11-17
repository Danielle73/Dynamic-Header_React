// eslint-disable-next-line no-unused-vars
import React from "react";

const currentTime = new Date().getHours();
const clockTime = new Date().toLocaleTimeString();

const date = new Date();


const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const dayOfWeekIndex = date.getDay();  
const dayOfMonth = date.getDate(); 
const monthIndex = date.getMonth();
const year = date.getFullYear();  


const dayOfTheWeek = weekdays[dayOfWeekIndex];
const monthOfTheYear = monthNames[monthIndex];


const currentDate = `${dayOfTheWeek} ${dayOfMonth} ${monthOfTheYear} ${year}`;

let greeting = '';
const customStyles = { color: '' };

if (currentTime < 12) {
  greeting = 'Good Morning';
  customStyles.color = 'red';
} else if (currentTime < 18) {
  greeting = 'Good Afternoon';
  customStyles.color = 'orange';
} else {
  greeting = 'Good Evening';
  customStyles.color = 'purple';
}

function Heading(){
    return ( 
        <>
        <h1 style={customStyles}>{greeting}</h1>
        <p>Today&apos;s Date is: {currentDate}</p>
        <p>The current time is: {clockTime}</p>
      </>
    );
}
 
export default Heading;
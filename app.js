console.log("Starting Eventbrite Event Management Module");
const eventManager = require("./MenaalAli_EventManager.js"); 

//Add events
eventManager.addEvents("In Harmony", "05-12-2026", "VOS Choral Hub @ Enabling Village Recital Hall", 27, 150,"From classical gems to beloved favourites, join us for an evening of harmony, joy, and music that brings voices and strings together.");

//Get total number of events
console.log("Total number of events: ", eventManager.getTotalNumOfEvents());

//Book tickets
const booking = eventManager.bookTickets("John", 2, 3);
console.log("Bookings details: ", booking);

//Cancel bookings
eventManager.cancelBooking(3,0);
console.log("Following booking cancelled: ", eventManager.cancelBooking(3,0));

//Retrive event information
console.log("Event information: ", eventManager.retrieveInformation(1));



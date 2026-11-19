let eventManager = {

    description: "Eventbrite Event Management Module",

    events:[
        {
            eventName: "Hello! How are you",
            date: "25-11-2026",
            venue: "Orchard Central",
            ticketPrice: 12,
            availableTickets: 50,
            description:"What if someone you love forgets your name? Join James as he discovers that even when memories fade, love finds a way!"
        },
        {
            eventName: "Joyful Steps Recital 2026",
            date: "22-11-2026",
            venue: "Sota Drama Theatre",
            ticketPrice: 40,
            availableTickets: 100,
            description: "Transcend with Elsa in this magical story of perseverance through acceptance of her uniqueness as strength mirroring every dancer’s journey."
        },
        {
            eventName: "The Moon Cats - Beneath the Same Moon",
            date: "12-12-2026",
            venue: "Drama Centre",
            ticketPrice: 24,
            availableTickets: 250,
            description: "An ODA dance musical where two worlds of cats collide in an unexpected journey of friendship and belonging."
        }
    ],
    

    bookings: [],

    // 1. Add events
     addEvents(eventName, date, venue, ticketPrice, availableTickets, description){
        this.events.push(
            {
                eventName: eventName,
                date: date,
                venue: venue,
                ticketPrice: ticketPrice,
                availableTickets: availableTickets,
                description: description
            }
        );
    },

    // 2. Get total number of events
    getTotalNumOfEvents(){
        return this.events.length
    },
    
    // 3. Book tickets
    bookTickets(personName, quantity, index){
        const booking = this.events[index];

        const newBooking = {
            personName: personName,
            eventName: booking.eventName,
            quantity: quantity,
            totalPrice: booking.ticketPrice * quantity

        };
        booking.availableTickets = booking.availableTickets - quantity;
        this.bookings.push(newBooking);
        return newBooking;

    },
    // 4. Cancel bookings
    cancelBooking(eventIndex, bookIndex){

        this.events[eventIndex].availableTickets =  this.events[eventIndex].availableTickets + 
        this.bookings[bookIndex].quantity;

        this.bookings[bookIndex].status = "Cancelled";
        return this.bookings[bookIndex];
    },
    
    // 5. Retrive event information 
    retrieveInformation(index){
        return this.events[index];
    }
}

module.exports = eventManager;

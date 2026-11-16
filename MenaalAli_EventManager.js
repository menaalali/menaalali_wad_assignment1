module.exports = {
    description: "Eventbrite Event Management Module",

    events:[
        {
            eventName: "Symphonie Dè Harmonica: Echoes of Our Journey",
            date: "21-11-2026",
            venue: "ITE College West",
            ticketPrice: 12,
            availableTickets: 200
        }
    ],
    

    bookings: [],
    // 1. Add events
    AddEvents(eventName, date, venue, ticketPrice, availableTickets) {
        const newEvent = {
            eventName: eventName,
            date: date,
            venue: venue,
            ticketPrice: ticketPrice,
            availableTickets: availableTickets

        };

        this.courses.push(newEvent);
        return newEvent;
    },
    // 2. Book tickets
    BookTickets(personName, eventName, quantity){
        const booking = this.booking[index];

        const bookings = {
            personName: personName,
            eventName: booking.eventName,
            quantity: quantity,
            totalPrice: ticketPrice * quantity

        };
        booking.availableTickets = booking.availableTickets - quantity;
        this.bookings.push(booking);
        return booking;

    }
}

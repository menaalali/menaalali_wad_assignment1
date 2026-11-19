# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

# Assignment 1 Node Module
The existing web application I chose to create a node module for is Eventbrite and it is called 'Eventbrite Event Management Module'

# Set-Up
1. Ensure Node.js is installed in order to run the node module
2. Import the node module into the same folder as your main file (app.js)
3. Import the node module at the top of your app.js file (const eventManager = require("./MenaalAli_EventManager.js"); )

# Running The Node Module
To run the node module, right-click to open the integrated terminal for the folder consisting the node module and app.js file. Type 'node app.js' in the terminal and run to see the displayed output.

# Node Module Functions & Parameters
The node module consists of 5 functions that is relevant to the Eventbrite website. The following five functions in MenaalAli_EventManager.js are addEvents, getTotalNumOfEvents, bookTickets, cancelBooking and retrieveInformation. 

1. eventManager.addEvents [Adds a new event]
Parameters: eventName, date, venue, ticketPrice, availableTickets, description
2. getTotalNumOfEvents [Returns the total number of events]
Parameters: None
3. eventManager.bookTickets [Able to book tickets]
Parameters: personName, quantity, index
4. eventManager.cancelBooking [Able to cancel ticket bookings]
Parameters: eventIndex, bookIndex
5. eventManager.retrieveInformation [Retrives specified event's information]
Parameters: index


For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
Provide the references that you have used to support your assignment. 
Existing web application link: https://www.eventbrite.sg/

I declare that I have used Generative AI tools ChatGPT in the preparation of this work. The tools were used for generating ideas for reference to create the node module. The prompt used is 'Give me ideas of functions for reference to create a node module relevant to Eventbrite'.
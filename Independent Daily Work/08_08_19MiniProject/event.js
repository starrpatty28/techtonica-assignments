class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
    }
    //Add a function to Event class and push to 'available ticket array
    addAvailableTickets (typ, price) {
       const ticket1 = new Ticket(typ, price);
       this.availableTickets.push(ticket1); 
    }
  }

class Ticket {
    constructor(type, price) {
      this.type = type;
      this.price = price;
     }
  }
//Creating objects from the above class
const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires")
  ;
const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");

const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");

//Create an empty array
const event_array = new Array();

//pushing multiple objects to an array at once
event_array.push(event_obj1, event_obj2, event_obj3);

//check to see if the events are in the array
    //console.log(event_array);


event_obj1.addAvailableTickets("human", 299);
event_obj1.addAvailableTickets("vampire", 99);
console.log(event_obj1);

event_obj2.addAvailableTickets("General Admission", 25)
event_obj2.addAvailableTickets("Floor Seating", 80)

event_obj3.addAvailableTickets("Orchestra", 300)
event_obj3.addAvailableTickets("Mezzanine", 200)
event_obj3.addAvailableTickets("Balcony", 100)
console.log(event_obj2);



$(document).ready(function() {
    let html = "";
    $.each(event_array, function(index, item) {
      html+= `<li>${item.name} - ${item.description}</li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });

// .each() is used to iterate through the array of objects. Above code represents the syntax to iterate using .each()

// .html() is used to return the HTML code from jQuery to the target element of the HTML page.
// event is the target element in the below code.


//create another class, "Ticket" with two properties on it, and within your function definition, you will need to modify your availableTickets property.



// Now that you have the basic class working, let's add a useful function to your class. Add a function on the class called addAvailableTickets to create a ticket type, that will accept two parameters. The first parameter will be the ticket type, and the second parameter will be the price of the ticket. The method should look like this when it is called:

// Hint: You might want to create another class, "Ticket" with two properties on it, and within your function definition, you will need to modify your availableTickets property.
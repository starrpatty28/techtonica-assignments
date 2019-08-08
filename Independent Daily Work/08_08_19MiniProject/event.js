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
    //Add a function to Event class to look for min and max price
    searchTickets(minPrice, maxPrice) {
        let results = '';
        for(let i = 0; i<this.availableTickets.length; i++) {
            const ticket = this.availableTickets[i];
            //console.log(ticket.price);
            if (minPrice <= ticket.price && ticket.price <= maxPrice ) {
                results += ` ${ticket.type}`; 
            }  
        }
        //if statement for if the ticket price is not in the range 
        if(!results) {
            return 'No tickets available';
        }
        return results;
    }
  }// close class Event

//Ticket class helps get the price, search ect to check conditions 
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
console.log(event_obj2);


event_obj3.addAvailableTickets("Orchestra", 300)
event_obj3.addAvailableTickets("Mezzanine", 200)
event_obj3.addAvailableTickets("Balcony", 100)
console.log(event_obj3);

// event_obj3.searchTickets(0, 300);
// console.log(event_obj3.searchTickets(0, 300));


$(document).ready(function() {
    let html = "";
    $.each(event_array, function(index, item) {
      html+= `<li>${item.name} - ${item.description} - ${item.searchTickets(0,300) } </li>`;
    });
    // insert final html into #event...
    $("#event").html(html);
  });

// .each() is used to iterate through the array of objects. Above code represents the syntax to iterate using .each()

// .html() is used to return the HTML code from jQuery to the target element of the HTML page.
// event is the target element in the below code.

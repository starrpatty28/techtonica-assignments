class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
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

console.log(event_array);

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
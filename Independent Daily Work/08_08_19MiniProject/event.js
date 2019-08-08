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

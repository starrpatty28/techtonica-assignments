class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = []
    }
  }

  const event_obj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires")
  ;
  const event_obj2 = new Event("Skillet & Sevendust", "Victorious war tour");
  
  const event_obj3 = new Event("Jenny Lewis", "On the line tour 2019");
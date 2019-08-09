class Users {
    constructor(name) {
     
    this.name = name;    
    }
}

class Events {
    constructor(name, price) {
 
    this.name = name;
    this.price = price; 
    }
}

class EventRecommender {
    constructor() {

        this.events = [];
        this.users = [];
    }

    addEvent(new_events) {
    // Adds a new Event to the System
        this.events.push(new_events);

    }
    
    addUser(new_users) {
        this.users.push(new_users);
    }

    saveUserEvent(){
    //Allow users to save events to a personal Events array.
    }

    deleteUser() {
    // Deletes a User from the system
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    filter(){
    }
}
//Adding an object for the 'Rec' class
    const event_rec = new EventRecommender();

//Adding an object for the 'Users' class
    const user_Alicia = new Users('Alicia');
    event_rec.addUser(user_Alicia);
    console.log(event_rec);

//Adding an obeject for the 'Events' class
    const event1 = new Events('TuPac_concert', 800);
    event_rec.addEvent(event1);
    console.log(event_rec);


// Users:
// Add a new User to the System

// Allow users to save events to a personal Events array //make an empty aray in the users class

// Delete a User from the System

// Event:
// Add a new Event to the System

// Delete an Event from the System

// Filter:
// Note: You can use two separate filter functions or one if you'd like an extra challenge :)


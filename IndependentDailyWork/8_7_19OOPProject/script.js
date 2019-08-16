class Users {
    constructor(name, userEvents) {
     
    this.name = name;
    this.userEvents = [];   
    }
 // saveUserEvent(users, event){
    addFavoriteEvents(chosenEvent) {
    this.userEvents.push(chosenEvent);
     }
}

class Events {
    constructor(name, price) {
 
    this.name = name;
    this.price = price; 
    }
}

class EventRecommender {
    constructor(events, users) {

        this.events = [];
        this.users = [];
    }

    addEvent(new_events) {
    // Adds a new Event to the System
        this.events.push(new_events);

    }
    
    addUser(new_users) {
    // Adds a new Event to the System
        this.users.push(new_users);
    }

    deleteUser(name) {
    // Deletes a User from the system
    this.users = this.users.filter( users => users.name !== name );
    }
   
    deleteEvent(name) {
    // Deletes the Event from the system
    this.events = this.events.filter( events => events.name !== name );
     }

    filter(){
        
    }
}
//Adding an object for the 'Rec' class
    const event_rec = new EventRecommender();

//Adding an object for the 'Users' class
    const user_Dominique = new Users('Dominique');
    event_rec.addUser(user_Dominique);

    const user_Alicia = new Users('Alicia');
    event_rec.addUser(user_Alicia);

    const user_Kamiah = new Users('Kamiah');
    event_rec.addUser(user_Kamiah);
    //console.log(event_rec);

//Adding an obeject for the 'Events' class
    const event1 = new Events('TuPac_concert', 1000);
    event_rec.addEvent(event1);

    const event2 = new Events('WuTang_concert', 600);
    event_rec.addEvent(event2);
     
    const event3 = new Events('Biggie_concert', 800);
    event_rec.addEvent(event3);
    //console.log(event_rec);


 // Delete a User from the System
    event_rec.deleteUser('Alicia');
    //console.log(event_rec);


 // Delete a Event from the System
    event_rec.deleteEvent('WuTang_concert');
 

//Save users favorite event
    user_Alicia.addFavoriteEvents(event1)
    user_Dominique.addFavoriteEvents(event2);
    user_Kamiah.addFavoriteEvents(event3);
    console.log(user_Alicia);
    console.log(user_Dominique);
    console.log(user_Kamiah);

// Filter:



console.log(event_rec);

module.exports = EventRecommender;





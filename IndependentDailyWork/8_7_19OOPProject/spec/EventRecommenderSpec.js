describe("EventRecommender", () => {
  const EventRecommender = require("../script.js");
  let er;

  beforeEach(() => {
    er = new EventRecommender();
  });

  describe("addEvent", () => {
    it("adds a new Event to the system", () => {
      er.addEvent("Change Me");
      expect(er.events.length).toEqual(1);
      // expect(er.events[0].title).toEqual("Change Me"); // what are some other things you can test?
    });
  });

  describe("addUser", () => {
    it("adds a new User to the system", () => {
      er.addUser("Change Me");
      expect(er.users.length).toEqual(1);
    });
  });

  // describe("saveUserEvent", () => {
  //   it("adds an event to a user's personal event array", () => {
  //     er.addEvent("Make a new event");
  //     er.addUser("Make a new user");
  //     er.saveUserEvent("event", "user"); // change these to match your method signature
  //     expect(er.user.personalEvents.length).toEqual(1);
  //   });
  // });

  describe("deleteUser", () => {
    it("removes a User from the system", () => {
      er.addUser("Alicia");
      er.deleteUser("Alicia");
      // expect(er.user.length).toEqual(0);
    });
  });

  describe("deleteEvent", () => {
    it("removes the event from the system", () => {
      er.addEvent("TuPac");
      er.deleteEvent("TuPac");
      // expect(er.events.length).toEqual(0);
    });
  });
});

const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
  Event.find()
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('http://localhost:5000/add').post((req, res) => {
  const username = req.body.username;
  const event = req.body.event;

  const newEvent = new Event({
    username,
    event,
  });

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('http://localhost:5000/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('http://localhost:5000/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('http://localhost:5000/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.username = req.body.username;
      event.event = req.body.event;


      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
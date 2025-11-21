const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ start: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get events for a specific date range
router.get('/range', async (req, res) => {
  try {
    const { start, end } = req.query;
    const events = await Event.find({
      start: { $gte: new Date(start) },
      end: { $lte: new Date(end) }
    }).sort({ start: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    start: req.body.start,
    end: req.body.end,
    allDay: req.body.allDay,
    color: req.body.color,
    location: req.body.location
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        event[key] = req.body[key];
      }
    });

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
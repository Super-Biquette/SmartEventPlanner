const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

router.get('/', async (req, res) => 
{
    try 
    {
        const events = await Event.find();
        res.json(events);

    } 
    catch (error) 
    {

        res.status(500).json({ message: error.message });

    }
});

router.get('/:id', async (req, res) => 
{
    try 
    {
        const event = await Event.findById(req.params.id);
        res.json(event);
    } 
    catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => 
{
    const newEvent = new Event({
        title: req.body.title,
        date: req.body.date,
        location: req.body.location,
        category: req.body.category,
        description: req.body.description
    });
    
    try 
    {
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } 
    catch (error) 
    {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => 
{
    try 
    {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: 'Event deleted' });
    } 
    catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
import express from 'express';
import multer from 'multer';
import { addEvent } from '../services/eventService.js';
import { eventModel } from '../models/eventShema.js';
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post('/addEvents', upload.fields([{ name: 'image' }, { name: 'image2' }]), async (req, res) => {
    try {
        const { title1, title2, description, date1, date2 } = req.body;

        // Fix: Get each image from its respective field
        const image = req.files?.image?.[0]
            ? {
                data: req.files.image[0].buffer,
                contentType: req.files.image[0].mimetype
            }
            : null;

        const image2 = req.files?.image2?.[0]
            ? {
                data: req.files.image2[0].buffer,
                contentType: req.files.image2[0].mimetype
            }
            : null;

        const { statuscode, data } = await addEvent({
            title1,
            title2,
            description,
            date1: new Date(date1),
            date2: new Date(date2),
            image,
            image2
        });

        res.status(statuscode).send(data);
    } catch (err) {
        res.status(500).send('Something went wrong');
    }
});



router.get('/', async (req, res) => {
    try {
        const events = await eventModel.find();

        // Convert image buffers to base64 before sending
        const eventsWithImages = events.map(event => {
            let base64Image = '';
            let base64Image2 = '';
            if (event.image?.data) {
                base64Image = event.image.data.toString('base64');
            }
            if (event.image2?.data) {
                base64Image2 = event.image2.data.toString('base64');
            }


            return {
                ...event._doc,
                image: {
                    base64: base64Image,
                    contentType: event.image?.contentType || 'image/png'
                },
                image2: {
                    base64: base64Image2,
                    contentType: event.image2?.contentType || 'image/png'
                }

            };
        });

        res.json(eventsWithImages);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving events');
    }
});



router.get('/:id', async (req, res) => {
    try {
        const event = await eventModel.findById(req.params.id);
        if (!event) return res.status(404).send({ message: 'Event not found' });

        // Convert buffer to base64 if needed
        let base64Image = '';
        let base64Image2 = '';
        if (event.image?.data) {
            base64Image = event.image.data.toString('base64');
        } else if (event.image?.base64) {
            base64Image = event.image.base64;
        }
        if (event.image2?.data) {
            base64Image2 = event.image2.data.toString('base64');
        } else if (event.image2?.base64) {
            base64Image2 = event.image2.base64;
        }

        res.json({
            ...event._doc,
            image: {
                base64: base64Image,
                contentType: event.image?.contentType || 'image/png'
            },
            image2: {
                base64: base64Image2,
                contentType: event.image2?.contentType || 'image/png'
            }
        });
    } catch (err) {
        res.status(500).send({ message: 'Server error' });
    }
});



router.put('/:id', upload.fields([{ name: 'image' }, { name: 'image2' }]), async (req, res) => {
    try {
        const { title1, title2, description, date1, date2 } = req.body;

        let imageData = null;
        let image2Data = null;

        // Check and convert image1
        if (req.files?.image?.[0]) {
            imageData = {
                data: req.files.image[0].buffer,
                contentType: req.files.image[0].mimetype,
                base64: req.files.image[0].buffer.toString('base64'),
            };
        }

        // Check and convert image2
        if (req.files?.image2?.[0]) {
            image2Data = {
                data: req.files.image2[0].buffer,
                contentType: req.files.image2[0].mimetype,
                base64: req.files.image2[0].buffer.toString('base64'),
            };
        }

        // Update document with optional images
        const updated = await eventModel.findByIdAndUpdate(
            req.params.id,
            {
                title1,
                title2,
                description,
                date1,
                date2,
                ...(imageData && { image: imageData }),
                ...(image2Data && { image2: image2Data }),
            },
            { new: true }
        );

        res.send(updated);
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).send("Server error");
    }
});






router.delete('/:id', async (req, res) => {
    const deleted = await eventModel.findByIdAndDelete(req.params.id);
    res.json(deleted);
});

export default router;

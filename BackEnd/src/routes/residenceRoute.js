import express from 'express';
import multer from 'multer';
import { addResidence } from '../services/residenceService.js';
import { residenceModel } from '../models/residenceShema.js';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/addResidence', upload.single('image'), async (req, res) => {
    const { title1, title2, author, date1, description } = req.body;
    const image = req.file
        ? {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
        : null;

    try {
        const { data, statuscode } = await addResidence({ title1, title2, author, date1, description, image });
        res.status(statuscode).json({ statuscode, message: data });
    } catch (err) {
        res.status(500).json({ message: 'Failed to add residence' });
    }
});

router.get('/', async (req, res) => {
    try {
        const residences = await residenceModel.find();
        
        const residencesWithImages = residences.map(residence => {
            const residenceObj = residence.toObject();
            if (residenceObj.image && residenceObj.image.data) {
                residenceObj.image = {
                    base64: residenceObj.image.data.toString('base64'),
                    contentType: residenceObj.image.contentType || 'image/png'
                };
            }
            return residenceObj;
        });

        res.json(residencesWithImages);
    } catch (error) {
        console.error("Error fetching residences:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const residence = await residenceModel.findById(req.params.id);
        if (!residence) return res.status(404).send({ message: 'residence not found' });

        const residenceObj = residence.toObject();
        if (residenceObj.image?.data) {
            residenceObj.image = {
                base64: residenceObj.image.data.toString('base64'),
                contentType: residenceObj.image.contentType || 'image/png'
            };
        }

        res.json(residenceObj);
    } catch (err) {
        res.status(500).send({ message: 'Server error' });
    }
});

router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const { title1, title2, author, date1, description } = req.body;
        let image = null;

        if (req.file) {
            image = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const updateData = {
            title1,
            title2,
            author,
            date1,
            description
        };

        if (image) {
            updateData.image = image;
        }

        const updated = await residenceModel.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.json(updated);
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).send("Server error");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await residenceModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Residence not found' });
        }
        res.json({ message: 'Residence deleted successfully' });
    } catch (error) {
        console.error("Delete error:", error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
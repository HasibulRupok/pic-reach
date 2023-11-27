import express from "express";
import multer from "multer"; // for upload file to the file-system
import path from "path";
import fs from "fs";
const router = express.Router();

import { User } from "../models/userModel.js";


// router.get('/', (req, res) => {
//     return res.status(200).send("Welcome to the home");
// })
router.get('/', async (req, res) => {
    try {
        const users = await User.find({}); // {} empty object to find all books
        return res.status(200).json({
            'message': 'success',
            'count': users.length,
            data: users
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})
// get a single user 
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id); // {} empty object to find all books
        return res.status(200).json({
            'message': 'success',
            data: user
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})
// update an user 
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.phone) {
            return res.status(400).json({ message: "Send all required fields: name and phone number" })
        }
        const { id } = req.params;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" })
        }
        else {
            return res.status(200).json({ message: "Updated Sucessfully", data: updatedUser })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// delete an user 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Get the image filename from the user data
        const filename = user.image.split('/').pop(); // Assuming the image URL structure: http://localhost:5555/images/xyz.png

        // Delete the image file from the server
        fs.unlink(`./Public/images/${filename}`, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Failed to delete user's image" });
            }
            // console.log(`Image ${filename} deleted successfully`);
        });

        // Delete the user data from the database
        const result = await User.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User and associated image deleted successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error for Deleting an User" });

    }
})

// add or post a user 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});
const upload = multer({
    storage: storage
}).single('image'); // Assuming the file field name is 'image'

router.post('/', upload, async (req, res) => {
    try {
        if (!req.body.name || !req.body.phone) {
            return res.status(400).send({ message: "Send all required fields: name and phone number" })
        }

        // console.log(req.file); // Access uploaded file information using req.file
        const imageURL = "http://localhost:5555/images/" + req.file.filename;
        const address = !req.body.address == "" ? req.body.address : "Bangladesh";

        const newUser = {
            name: req.body.name,
            phone: req.body.phone,
            address: address,
            image: imageURL
        };
        const user = await User.create(newUser);
        return res.status(201).json({ message: "User added successfully", data: user });

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})


export default router;
// module.exports = router;
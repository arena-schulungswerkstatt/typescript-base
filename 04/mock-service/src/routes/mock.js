const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const {saveToFile, getObject} = require('../utils/fileUtils')

router
    .route('/upload')
    .post(function (req, res) {
        const body = req.body;
        const id = uuidv4();

        let mockObject = getObject();
        mockObject[id] = body;
        saveToFile(mockObject);

        return res.status(201)
            .json({
                message: 'Mock object created',
                id: id,
                object: body
            })
    });
router.route('/:mockId')
    .get(function (req, res) {
        const mockId = req.params.mockId;
        const mockObject = getObject();
        if (mockObject && mockObject[mockId]) {
            return res.json(mockObject[mockId])
        } else {
            return res.status(404)
                .json({message: 'Mock object not found!'})
        }
    });

module.exports = router;

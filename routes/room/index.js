const express = require('express')
const router = express.Router({ mergeParams: true });
const authenticateUsers = require('../../middlewares');

/// public endpoints
const getAllRooms = (req, res) => {
    res.json({
        message: 'Fetching all the rooms of a hotel'
    })
}

router.get('/', getAllRooms);
const getRoomDetailInformation = (req, res) => {
    console.log('#################################', req.params)
    res.json({
        message: 'Fetching a detail information about room of hotel.'
    })
}
router.get('/:roomId', getRoomDetailInformation);


/// private endpoints
router.use(authenticateUsers);

const createRoom = (req, res) => {
    res.json({
        message: 'Creating a room of hotel'
    })
}
router.post('/', createRoom);

const updateRoomInformation = (req, res) => {
    res.json({
        message: 'Updating room information of hotel'
    })
}
router.put('/:roomId', updateRoomInformation);

const deleteRoom = (req, res) => {
    res.json({
        message: 'Removing room of hotel'
    })
}
router.delete('/:roomId', deleteRoom);

module.exports = router;

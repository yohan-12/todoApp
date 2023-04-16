const asyncHandler = require('express-async-handler')
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})
const setGoals = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Nothing to Post - no text body')
    }
        console.log(req.body);
        res.status(200).json({
            message: 'Set Goals'
        })
    }

const updateGoals = asyncHandler(
    async (req, res) => {
        if(!req.params.id){
            res.status(400)
            throw new Error('Please enter a valid id')
        }
        console.log(req.params.id);
        res.status(200).json({
            message: `update Goals ${req.params.id}`
        })
    }
)
const deleteGoals = asyncHandler(
    async (req, res) => {
        if(!req.params.id){
            res.status(400)
            throw new Error('Please enter a valid id')
        }
        console.log(req.params.id);
        res.status(200).json({
            message: `Delete  Goals ${req.params.id}`
        })
    }
)
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}

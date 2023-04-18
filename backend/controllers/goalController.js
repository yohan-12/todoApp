const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const getGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.find()
    res.status(200).json(goal)
})
const setGoals = asyncHandler(
    async (req, res) => {
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a text field')
        }
        const goal = await Goal.create({
            text: req.body.text
        })
        res.status(200).json(goal)
    }
) 

const updateGoals = asyncHandler(
    async (req, res) => {
        const goal = await Goal.findById(req.params.id)
        if(!goal){
            res.status(400)
            throw new Error('Goal ID not found')
        }
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedGoal)
    }
)
const deleteGoals = asyncHandler(
    async (req, res) => {
        const goal = await Goal.findById(req.params.id)
        if(!goal){
            res.status(400)
            throw new Error('Goal ID not found')
        }
        await Goal.findByIdAndRemove(req.params.id)
        const list  = await Goal.find()
       res.status(200).json(list)
    }
)
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}

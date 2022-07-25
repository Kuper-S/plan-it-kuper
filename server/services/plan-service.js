const plansData = "./services/dummy-data.json"
const {Event} = require('../db/models')

async function getAllPlans() {
    let events = await Event.findAll()
    return events
}

async function addPlan(plan){
    const {eventId, type, eventName, startDate, startHour, description} = plan
    await Event.create({eventId, type, eventName, startDate, startHour, description})
    return plan
}

async function deletePlan(id){
    const removedPlan = await Event.findOne({where:{id}})
    await removedPlan.destroy()
    return removedPlan
}

async function editPlan(id, plan){
    const editedPlan = await Event.findOne({where:{id}})
    editedPlan.dataValues = plan
    console.log("service editedPlan", editedPlan)
    await editedPlan.save()
    return editedPlan
}

module.exports = {
    getAllPlans,
    addPlan,
    deletePlan,
    editPlan,
}
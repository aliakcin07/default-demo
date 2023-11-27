//demo proj
//testing demo
//final demo version

const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//getting all subscribers
router.get('/', async (req,res) => {
  try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)

  }catch{
    res.status(500).json({message: err.message})
  }
})

//getting one subscriber
router.get('/:id', getSubscriber,(req,res) => {
  res.json(res.subscriber)
  
})

//creating one subscriber
router.post('/', async(req,res) => {

  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })

  try{
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
    
  }catch(err){
    res.status(400).json({message: err.message})
  }
})

//updating one subscriber
router.patch('/:id', getSubscriber,async(req,res) => {

  if(req.body.name != null){
    res.subscriber.name = req.body.name
  }
  if(req.body.subscribedToChannel != null){
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }try{
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  }catch{

    res.status(400).json({message: err.message})}

})

//deleting one subscriber
router.delete('/:id', getSubscriber, async (req,res) => {
  try{
    await res.subscriber.deleteOne()
    res.json({message: 'Deleted Subscriber'})

  } catch(err){
    res.status(500).json({message: err.message})
  }
})

//all the routers takes ids as params to get the sub, using middleware can eliminate writing the same code again and again
async function getSubscriber(req, res, next){
  let subscriber
  try{
    subscriber = await Subscriber.findById(req.params.id)
    if(subscriber == null){
      return res.status(404).json({message: 'Cannot find subscriber'})
    }
  }catch(err){
    return res.status(500).json({message: err.message})
  }

  res.subscriber = subscriber
  next()
}


module.exports = router
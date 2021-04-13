const router = require("express").Router()
const Car = require("./cars-model")
const mw = require("./cars-middleware")

router.get("/", async (req, res, next) => {
    try{
        const cars = await Car.getAll()
        res.status(200).json(cars)
    }catch(err){
        next(err)
    }
})

router.get("/:id", mw.checkCarId, (req,res) => {
    res.status(200).json(req.car)
})

router.post("/", mw.checkCarPayload, async (req,res,next) => {
    try{
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res) => { // eslint-disable-line
    res.status(500).json({message: err.message, stack: err.stack})
  })

module.exports = router
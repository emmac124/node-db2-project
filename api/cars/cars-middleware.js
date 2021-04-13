const Car = require("./cars-model");

const checkCarId = async (req, res, next) => {
  try{
    const { id } = req.params
    const car = await Car.getById(id)
    if(car){
      req.car = car
      next()
    }else{
      res.status(404).json({message: "Account not found"})
    }
  }catch(err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage} = req.body
  if(vin && make && model && mileage){
    next()
  }else if(!vin){
    res.status(400).json({message: "vin is missing"})
  }else if(!make){
    res.status(400).json({message: "make is missing"})
  }else if(!model){
    res.status(400).json({message: "model is missing"})
  }else if(!mileage){
    res.status(400).json({message: "mileage is missing"})
  }else{
    res.status(400).json({message: "missing requirements"})
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}

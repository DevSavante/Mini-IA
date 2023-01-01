const express = require('express')
const mongoose = require ('mongoose')
const Patient = require('./models/patientModels')
const app = express() 


app.use(express.json())


//routes

app.get('/',(req,res)=>{
  res.send('Hello Node API')
})

app.get('/blog',(req,res)=>{
  res.send('Hello blog, My name is Lexine')
})

app.get('/patient',async(req,res) => {
  try {
      const patient = await Patient.find({});
      res.status(200).json(patient)
  }catch (error){
    res.status(500).json({message:error.message})
  }
})

app.get("/patient/:id", async(req,res) => {
    try{
      const {id} = req.params;
      const patient = await Patient.findById(id);
      res.status(200).json(patient);
    }catch (error){
      res.status(500).json({message:error.message})
    }
})

app.post('/patient', async(req,res) => {
  try{
      const patient = await patient.create(req.body)
      res.status(200).json(patient)

  }catch(error){
    console.log(error.message)
    res.status(500).json({message:error,message})
  }
})

//update =patient
app.put('/patient/:id', async(req, res)=> {
  try {
      const {id} = req.params;
      const patient = await Patient.findByIdAndUpdate(id, req.body);
      //we cannot find any patient in database
      if(!patient){
        return res.status(404).json({message: 'cannot find any patient with ID ${id}'})
      }
      const updatedPatient = await Patient.findById(id);
      res.status(200).json(updatedPatient);

  } catch (error) {
    res.status(500).json({message:error,message})
  }
})

//delete a patient

app.delete('/patient/:id', async(req, res)=>{
  try {
    const {id}= req.params;
    const patient = await Patient.findByIdAndDelete();
    if(!patient){
      return res.status(404).json({message: 'cannot find any patient with ID ${id}'})
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({message:error,message})
  }
})

mongoose.set("strictQuery", false )
mongoose.
connect('mongodb+srv://koteilexine91:lexine91@cluster0.lr4zjft.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
  console.log('connected to MongoDB')
  app.listen(3000, () => {
    console.log ('Node API app is running on port 3000')
  });
  }).catch((error) => {
  console.log(error)
})
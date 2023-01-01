const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
  {
    name:{
      type: String,
      required: [true, "Please enter a patient name"]
    },
    patientId:{
      type: Number,
      required: true,
      default: 0
    },
    phone:{
      type:Number,
      required: true,
      default:0
    },
    gender:{
      type:String,
      requred: false,
    },
    address:{
      type:String,
      requred: false,
    },
    emergencyname:{
      type:String,
      requred: false,
    },
    emergencycontact:{
      type:Number,
      requred: false,
      default:0
    },
    
  },
  {
    timestamps: true
  }
)

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
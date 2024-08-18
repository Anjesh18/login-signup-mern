const express= require("express")
const mongoose= require("mongoose")
const cors=require("cors")
const Employee= require("../backend/models/EmployeeModel")
const app=express()
app.use(express.json())
app.use(cors())
const PORT=5000

mongoose.connect("mongodb://127.0.0.1:27017/auth")
.then(()=>{
    console.log("connected successfully")
    
})
.catch(err=>console.log(err))

app.post('/register',async(req,res)=>{
   
        
        const userAdded= await Employee.create(req.body)
        .then(employees=>res.json(req.body))
        .catch(err=>console.log(err))
    } 
)

app.post('/login', (req,res)=>{
    const {email,password}=req.body
    Employee.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        } else{
            res.json("No record exists")
        }
    })
})


app.listen(PORT,()=>{
    console.log("server is running")
})
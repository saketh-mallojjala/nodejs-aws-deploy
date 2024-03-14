

const express = require('express')

const app = express()

app.listen(5001, ()=>{
   console.log("API RUNNNING ON PORT 5001")
})

app.get('/', (req,res)=>{
   res.json('Saketh Mallojjala's node-js application is successfully deployed on aws-ec2 instance')

})

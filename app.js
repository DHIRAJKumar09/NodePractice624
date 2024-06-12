const express = require('express');
const app = express();
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
const port = 5000

//connect database
mongoose.connect('mongodb://127.0.0.1:27017/Tasks')
.then(()=>{
    console.log("database is connected");

})
.catch((error)=>{
    console.error("error found:",error);
})


app.use(express.json());
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

app.use('/api/v1/tasks',tasks)

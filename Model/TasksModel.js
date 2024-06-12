
const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name:{
       type: String,
      
    },
    completed:{
       type: Boolean,
        
    }
})
const  TasksModel =  mongoose.model("tasks",TaskSchema);

module.exports = {TasksModel};


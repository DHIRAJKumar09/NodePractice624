const {TasksModel} = require('../Model/TasksModel')
// 1.Get All tasks 
const getAllTasks = async(req,res)=>{
    const newUser = await TasksModel.find();
    res.send(newUser);
    
}


// 2.create new tasks
const createNewTasks = async(req,res)=>{
    const {name,completed} = req.body;
    const newUser = await TasksModel.create({name,completed});
    await newUser.save();
   res.status(200).json(newUser)
}


// 3.get single tasks
const getSingleTasks =async(req,res)=>{
    const newUser = await TasksModel.find({_id:req.params.id});
    res.send(newUser);
}
// 4.delete single tasks
const deleteTaks =async(req,res)=>{
    const newUser = await TasksModel.deleteOne({_id:req.params.id});
    res.send(newUser);
}
// 5.update single tasks
const updateTasks =async(req,res)=>{
    const newUser = await TasksModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(newUser);

}
// 6.search tasks
const searchTasks =async(req,res)=>{
    const {query} = req.body;
    if(!query){
        return res.status(400).send({error:'Query parameter'});
    }
    const tasks = await TasksModel.find({name:new RegExp(query,'i')})
}


module.exports ={getAllTasks,createNewTasks,updateTasks,deleteTaks,searchTasks,getSingleTasks}
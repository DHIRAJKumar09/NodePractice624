const express = require('express')
const {getAllTasks,createNewTasks,updateTasks,deleteTaks,searchTasks,getSingleTasks} = require('../Controller/taskcontroller')

const router = express.Router();

router.route("/").get(getAllTasks).post(createNewTasks);
router.route("/:id").get(getSingleTasks).patch(updateTasks).delete(deleteTaks);
router.route('/task/search').get(searchTasks);
module.exports = router
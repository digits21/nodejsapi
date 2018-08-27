'use strict';

/*
 * @get all tasks list  
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


/*
 * @Creat a new task 
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/*
 * @get a specific task by id
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

/*
 * @update a task in database  
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */

exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.delete_a_task = function(req, res) {

/*
 * @remove a task from database
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */

  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

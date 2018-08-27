'use strict';
module.exports = function(app) {
  var todoList = require('../controller/todoListController');

/*
 * @GET and Post Method : Get all tasks list, POST to create new task 
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

/*
 * @Get a task by id
 * @Put a value to update task
 * @Delete a task by id
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *
 */
  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * @creating db.Tasks schema 
 * @Author :jean Ouedraogo
 * @date : 27-08-2018
 *  this is where you make your changes to match your db table
 */

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
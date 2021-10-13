'use strict';

const { expect } = require('chai');

const Todo = function (task) {
  this.task = task;
  this.completed = false;
  this.updateTaskStatus = function () {
    this.completed = !this.completed;
  };
};

exports.Todo = Todo;

describe('constructor pattern', () => {
  it('should create instance of Todo Class', done => {
    const todo = new Todo();
    expect(todo).to.be.instanceOf(Todo);
    done();
  });

  it('should update status of todo object', done => {
    const todo = new Todo();
    todo.updateTaskStatus();
    expect(todo.completed).to.be.true;
    done();
  });
});

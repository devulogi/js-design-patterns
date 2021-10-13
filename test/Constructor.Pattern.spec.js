'use strict';

const { expect } = require('chai');

const Todo = function (task, completed = false) {
  this.task = task;
  this.completed = completed;
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
    todo.completed = true;
    expect(todo.completed).to.be.true;
    done();
  });
});

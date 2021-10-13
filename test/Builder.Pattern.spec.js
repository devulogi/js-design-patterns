const { expect } = require('chai');
const { Factory } = require('./Factory.Pattern.spec');

class TodoBuilder {
  constructor(task = '') {
    this.task = task;
    this.completed = false;
    this.type = 'not_urgent';
  }

  isCompleted() {
    this.completed = true;
    return this;
  }

  isUrgent() {
    this.type = 'urgent';
    return this;
  }

  build() {
    return Factory(this.type, { task: this.task, completed: this.completed });
  }
}

describe('builder patternn', () => {
  it('should created a todo', done => {
    const todo = new TodoBuilder('fix bugs').isUrgent().isCompleted();
    expect(todo.type).to.equal('urgent');
    done();
  });
});

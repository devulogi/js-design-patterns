const { expect } = require('chai');
const { Todo } = require('./Constructor.Pattern.spec');

const Factory = function (type, task) {
  switch (type) {
    case 'urgent':
      return {
        type: 'Urgent',
        task: new Todo(task),
        createdAt: new Date().getTime(),
      };
    case 'not important':
      return {
        type: 'Not important',
        task: new Todo(task),
        createdAt: new Date().getTime(),
      };

    default:
      throw 'Missing params.';
  }
};

describe('Factory', () => {
  it('should create urgent task', done => {
    const todo = new Factory('urgent', 'fix bugs');
    expect(todo.type).to.equal('Urgent');
    done();
  });
});

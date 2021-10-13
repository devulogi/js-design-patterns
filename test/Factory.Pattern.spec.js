const { expect } = require('chai');
const { Todo } = require('./Constructor.Pattern.spec');

const Factory = function (type, task) {
  switch (type) {
    case 'urgent':
      return {
        type: 'urgent',
        task: new Todo(task),
        createdAt: new Date().getTime(),
      };
    case 'not_important':
      return {
        type: 'not_important',
        task: new Todo(task),
        createdAt: new Date().getTime(),
      };

    default:
      throw 'Missing params.';
  }
};

exports.Factory = Factory;

describe('factory pattern', () => {
  it('should create urgent task', done => {
    const todo = Factory('urgent', 'fix bugs');
    expect(todo.type).to.equal('urgent');
    done();
  });
});

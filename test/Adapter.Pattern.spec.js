const { expect } = require('chai');

class Transaction {
  constructor() {
    this.balance = 1000;
  }

  config({ logger }) {
    this.logger = logger;
  }

  deposite(amount) {
    if (!amount) {
      const error = new TypeError('Zero digits error');
      if (this.logger) {
        this.logger('Deposite', error);
      }
      throw error;
    } else {
      const balance = (this.balance = this.balance + amount);
      this.logger('Deposite', balance);
      return balance;
    }
  }

  withdraw(amount) {
    if (!amount) {
      const error = new TypeError('Zero digits error');
      if (this.logger) {
        this.logger('Withdraw', error);
      }
      throw error;
    } else {
      const balance = (this.balance = this.balance - amount);
      this.logger('Withdraw', balance);
      return balance;
    }
  }
}

const logger = (type, info) => {
  console.info(`${type}: ${info}; Time: ${new Date().getTime()}`);
};

describe('adapter pattern', () => {
  it('withdraw money and log transaction', done => {
    const transact = new Transaction();
    transact.config({ logger });
    transact.withdraw(500);
    expect(transact).to.haveOwnProperty('logger');
    done();
  });
});

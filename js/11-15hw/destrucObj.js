const TransactionType = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const TransactionStatus = {
  OK: 'OK',
  FAIL: 'FAIL'
};


const account = {
  balance: 0,
  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    if (!(amount && type)) {
      return;
    }

    return {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
      date: Date.now(),
      message: '',
      status: '', 
      };
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, TransactionType.DEPOSIT);

    if (!amount || isNaN(Number(amount)) || amount < 0) {
      transaction.message = 'Неправильные входящие данные';
      transaction.status = TransactionStatus.FAIL;
      this.transactions.push(transaction);
      return;
    }

    this.balance = this.balance + amount;
    transaction.status = TransactionStatus.OK;
    this.transactions.push(transaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount , this.TransactionType.WITHDRAW);
    if (!amount || amount < 0) {
      return;
    }
    if (amount > this.balance) {
      console.log("сумма превышает депозит");
      return;
    }
    this.balance = this.balance - amount;
    transaction.status = TransactionStatus.OK
    this.transactions.push(transaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
  if (!id) {
    return;
  };

   return this.transactions.filter(value => this.transactions.id === id);
    
  },

  /*
  
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
  getTransactionTotal(type) {
    if(TransactionType.DEPOSIT !== type && TransactionType.WITHDRAW !== type) {
      console.log('не поддерживается')
      return;
    }

    return this.transactions.filter(value => value.type === type && value.status === TransactionStatus.OK).map(val => val.amount).reduce((accum, curr) => accum + curr, 0);  
  }
};
// account.deposit(undefined);
account.deposit(100);
account.deposit(100);
console.log(account.getBalance());
account.withdraw('100');
console.log(account.getBalance());
console.log('Total amount: ' + account.getTransactionTotal(TransactionType.DEPOSIT));
console.log('Total amount: ' + account.getTransactionTotal(TransactionType.WITHDRAW));




const obj1 = {
  name: 'dima',
  age: 16,
  length: 182,
  width: 78,
};

const {name , age , length , width} = obj1;
// ну типо наверное нет смысла во всех моих файлах деструктуризовать обьекты , по этому напишу так , чтобы понятно было что я помню как это делается
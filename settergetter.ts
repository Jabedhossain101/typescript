// access>> modifier

class BankAccount {
  public readonly userId: number;

  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userBalance = userBalance;
  }
//balance set kortece
/*   addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  } */

  
  // use setter 
  set addBalance(amount: number) {
    this.userBalance=this.userBalance+ amount
  }
  // //get kora

  // getBalance() {
  //   return this.userBalance
  // }

  // use get 
  get getBalance() {
    return this.userBalance
  }
}

class studentBankAccount extends BankAccount {
  test() {
    this.userName;
  }
}

const rafsanAccount = new BankAccount(111, 'rafsan', 100);

/* rafsanAccount.userId = 12;

rafsanAccount.userBalance = 110;

rafsanAccount.addBalance(230);
rafsanAccount.addBalance(20);

console.log(rafsanAccount);
 */

// console.log(rafsanAccount.getBalance());// function call

rafsanAccount.addBalance = 30;
// rafsanAccount.addBalance = 50;

console.log(rafsanAccount);





// access>> modifier

class BankAccount {
  public userId: number;

  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  callHiddenMethod(balance:number) {
    this.addBalance(balance)
  }
}

class studentBankAccount extends BankAccount {
  test() {
    this.userName;
  }
}

const rafsanAccount= new BankAccount(111, 'rafsan', 100);

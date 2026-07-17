// access>> modifier


class BankAccount{
  public readonly userId: number;

  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
    this.userBalance=userBalance
  }

  addBalance(balance: number) {
    this.userBalance= this.userBalance+ balance
  }
}


class studentBankAccount extends BankAccount{
  test() {
    this.userName;
  }
}

const rafsanAccount = new BankAccount(111, 'rafsan', 100);

rafsanAccount.userId = 12;

rafsanAccount.userBalance = 110;

rafsanAccount.addBalance(230);

console.log(rafsanAccount);

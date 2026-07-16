// access>> modifier


class BankAccount{
  public readonly userId: number;

  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance= userBalance
  }
}

const rafsanAccount = new BankAccount(111, 'rafsan', 32);

rafsanAccount.userId = 2332;

rafsanAccount.userBalance=2344

console.log(rafsanAccount);
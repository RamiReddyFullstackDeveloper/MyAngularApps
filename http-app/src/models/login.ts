export class Login {
  private userId: string;
  private userName: string;

  constructor(userId: string, userName: string) {
    this.userId = userId;
    this.userName = userName;
  }

  public getUserId(): string {
    return this.userId;
  }
  public getUserName(): string {
    return this.userName;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public setUserName(userName: string): void {
    this.userName = userName;
  }
}

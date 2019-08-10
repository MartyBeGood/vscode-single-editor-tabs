export class Lock {
  inSession: boolean = false;
  start(): void {
    this.inSession = true;
  }
  stop(): void {
    this.inSession = false;
  }
  private constructor(){}

  private static instance: Lock;

  static getInstance() {
    if (!Lock.instance) {
      Lock.instance = new Lock();
    }
    return Lock.instance;
  }

}
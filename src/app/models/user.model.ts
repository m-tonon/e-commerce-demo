export interface IUser {
  uid: string;
  displayName: string;
  loading?: boolean;
  error?: string;
}

export class FireUser {
  constructor (
    public uid: string,
    public displayName: string,
  ) {}
}

export class User {
  constructor (
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

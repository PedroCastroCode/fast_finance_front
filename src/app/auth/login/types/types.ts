export interface LoginBody {
  login: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

const Token = "private_car_token";

const PERSIST_KEY = "private_car_token";

const AuthService = {
  getAccessToken: () => {
    return sessionStorage.getItem(Token);
  },

  clearToken: () => {
    sessionStorage.removeItem(`persist:${PERSIST_KEY}`);
    sessionStorage.removeItem(Token);
  },

  setAccessToken: (token) => {
    sessionStorage.setItem(Token, token);
  },
};

export default AuthService;

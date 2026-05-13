const login = async (payload: any) => {
  const email = payload.email;
  const password = payload.password;

  if (email === "admin@gmail.com" && password === "123456") {
    return {
      message: "Login successful",
      user: { email },
    };
  }

  throw new Error("Invalid credentials");
};

export const AuthService = {
  login,
};

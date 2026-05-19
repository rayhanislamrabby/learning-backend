import { User } from "./users.model.js";

// create user
const createUser = async (payload: any) => {
  const user = await User.create(payload);

  return user;
};

// get all users
const getAllUsers = async () => {
  const users = await User.find();

  return users;
};

export const UserService = {
  createUser,
  getAllUsers,
};
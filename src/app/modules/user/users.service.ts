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

// get single user
const getSingleUser = async (id: string) => {
  const user = await User.findById(id);

  return user;
};

// update user
const updateUser = async (
  id: string,
  payload: any,
) => {
  const user = await User.updateOne(
    { _id: id },
    payload,
  );

  return user;
};

// delete user
const deleteUser = async (id: string) => {
  const user = await User.deleteOne({
    _id: id,
  });

  return user;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
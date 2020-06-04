import userModel from "../models/User.ts";

const UserAll = async () => {
  return await userModel.findAll();
};

const UserById = async (userId: string) => {
  return await userModel.findById(userId);
};

const createUser = async (userData: any) => {
  const newUser = {
    Username: userData.Username,
    PasswordHash: userData.PasswordHash,
    PasswordSalt: userData.PasswordSalt,
    Gender: userData.Gender,
    DateOfBirth: userData.DateOfBirth,
    KnownAs: userData.KnownAs,
    Created: userData.Created,
    LastActive: userData.LastActive,
    Introduction: userData.Introduction,
    LookingFor: userData.LookingFor,
    Interests: userData.Interests,
    City: userData.City,
    Country: userData.Country,
  };

  await userModel.create(newUser);

  return newUser;
};

const updateUser = async (userId: any, userData: any) => {
  const user = await UserById(userId);

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    throw new Error("user not found");
  }

  const editUser = {
    Id: userId,
    Username: userData.Username,
    PasswordHash: userData.PasswordHash,
    PasswordSalt: userData.PasswordSalt,
    Gender: userData.Gender,
    DateOfBirth: userData.DateOfBirth,
    KnownAs: userData.KnownAs,
    Created: userData.Created,
    LastActive: userData.LastActive,
    Introduction: userData.Introduction,
    LookingFor: userData.LookingFor,
    Interests: userData.Interests,
    City: userData.City,
    Country: userData.Country,
  };

  try {
    await userModel.update(editUser);
  } catch (err) {
    return { message: "Error: user not updated!", error: err.message };
  }
};

const deleteUser = async (userId: string) => {
  try {
    userModel.destroy(userId);
  } catch (err) {
    return { message: "Error: user not deleted!", error: err.message };
  }
};

export {
  UserAll,
  UserById,
  createUser,
  updateUser,
  deleteUser,
};

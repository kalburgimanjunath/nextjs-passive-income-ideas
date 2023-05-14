export const getAllUsers = async () => {
  const allUsers = await fetch('./api/users').then((res) => res.json());
  (result) => result.json(result.users);
  return allUsers;
};
export const getUserById = () => {};

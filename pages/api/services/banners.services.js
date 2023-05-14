export const getAllBanners = async () => {
  const allUsers = await fetch('./api/banners').then((res) => res.json());
  (result) => result.json(result.banners);
  return allUsers;
};

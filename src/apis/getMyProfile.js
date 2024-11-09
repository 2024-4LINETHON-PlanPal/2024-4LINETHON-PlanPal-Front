const { GET } = require("./api");

export const getMyProfile = async (username) => {
  const { data } = await GET(`users/profile/${username}/`);
  return data;
};

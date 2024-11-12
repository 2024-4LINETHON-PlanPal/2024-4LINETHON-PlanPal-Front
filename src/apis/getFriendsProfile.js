const { GET } = require("./api");

export const getFriendsProfile = async (username) => {
  const { data } = await GET(`users/friends/${username}/`);
  return data;
};

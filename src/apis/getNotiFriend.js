const { GET } = require("./api");

export const getNotiFriend = async (username) => {
  const { data } = await GET(`notifications/friend/${username}/`);
  return data;
};

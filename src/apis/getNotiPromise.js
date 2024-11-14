const { GET } = require("./api");

export const getNotiPromise = async (username) => {
  const { data } = await GET(`notifications/promise/${username}/`);
  return data;
};

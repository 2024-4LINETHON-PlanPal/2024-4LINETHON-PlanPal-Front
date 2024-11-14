const { GET } = require("./api");

export const getNotiPlan = async (username) => {
  const { data } = await GET(`notifications/plan/${username}/`);
  return data;
};

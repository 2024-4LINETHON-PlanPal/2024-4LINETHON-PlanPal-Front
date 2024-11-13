const { PATCH } = require("./api");

export const patchMyProfile = async (username, myProfileData) => {
  const { data } = await PATCH(`users/profile/${username}/`, myProfileData);
  // console.log("data: ", data);
  return data;
};

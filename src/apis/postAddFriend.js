const { POST } = require("./api");

export const postAddFriend = async (myUsername, targetUsername) => {
  const { data } = await POST(`users/friends/${myUsername}/${targetUsername}/`);
  // console.log("data: ", data);
  return data;
};

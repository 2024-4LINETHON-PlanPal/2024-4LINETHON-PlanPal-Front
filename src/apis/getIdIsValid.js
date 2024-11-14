const { GET } = require("./api");

export const getIdIsValid = async (username) => {
  const data = await GET(`users/username-check/?username=${username}`);
  // console.log("data: ", data.data.message); // 가능한 아이디
  // console.log("data: ", data.response.data.mesage); // 중복 아이디

  return data;
};

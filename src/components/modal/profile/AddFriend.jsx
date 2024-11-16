import * as A from "components/modal/profile/AddFriend.Style";
import SearchPng from "assets/profile/search-icon-32x32.png";
import ClosePng from "assets/profile/close-icon-13x13.png";
import { useEffect, useState } from "react";
import { postAddFriend } from "apis/postAddFriend";

function FriendItem({ friendName }) {
  return (
    <A.FriendItem>
      {friendName}
      <A.ImgContainer>
        <A.IconImg src={ClosePng} alt="삭제" />
      </A.ImgContainer>
    </A.FriendItem>
  );
}

export default function AddFriend() {
  const [targetUsername, setTargetUsername] = useState("");
  const [notiText, setNotiText] = useState("");
  const [errorText, setErrorText] = useState("");

  // api 연결
  const myUsername = localStorage.getItem("username");

  const fetchAddFriend = async (e) => {
    e.preventDefault();
    const result = await postAddFriend(myUsername, targetUsername);
    // console.log("친구추가 api: ", result);
    // 친구를 추가했습니다: 201
    // 이미 친구: 200
    // 없는 아이디: 404
    // 나 자신: 400
    if (result) {
      setNotiText(result.message);
      setErrorText("");
    } else {
      setErrorText("해당 닉네임은 존재하지 않습니다.");
      setNotiText("");
    }
  };

  return (
    <>
      <A.InputTitle>친구 추가하기</A.InputTitle>
      <A.InputForm onSubmit={fetchAddFriend}>
        <label>
          <A.InputBox onChange={(e) => setTargetUsername(e.target.value)} placeholder="친구의 아이디를 입력해주세요" />
        </label>
        {/* <A.SubmitButton type="submit">
            <A.ButtonImg src={SearchPng} alt="검색" />
          </A.SubmitButton> */}
        {notiText && <A.NotiText>{notiText}</A.NotiText>}
        {errorText && <A.ErrorText>{errorText}</A.ErrorText>}
        <A.FriendList>
          {/* 마진 */}
          {/* <FriendItem friendName="수진" />
        <FriendItem friendName="꼉" /> */}
        </A.FriendList>

        <A.SubmitBtn type="submit">친구 추가하기</A.SubmitBtn>
      </A.InputForm>
    </>
  );
}

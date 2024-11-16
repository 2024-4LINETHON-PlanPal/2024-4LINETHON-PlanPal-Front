import * as A from "components/modal/profile/AcceptFriend.Style";
import ProfilePng from "assets/profile/profile-icon-50x50.png";
import { useState } from "react";
import { postAddFriend } from "apis/postAddFriend";
import { useLocation, useNavigate } from "react-router-dom";

export default function AcceptFriend({ nickname = "김플랜", isFriendNow = false }) {
  const location = useLocation();
  const state = location.state;
  // const navigate = useNavigate();
  // const [targetUsername, setTargetUsername] = useState("dkdlel2"); // 테스트용
  const [notiText, setNotiText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isFriend, setIsFriend] = useState(isFriendNow);

  // api 연결
  const myUsername = localStorage.getItem("username");

  const fetchAddFriend = async (e) => {
    e.preventDefault();

    if (!isFriend) {
      const result = await postAddFriend(myUsername, state.targetUsername);
      // console.log("친구추가 api: ", result);
      // 친구를 추가했습니다: 201
      // 이미 친구: 200
      // 없는 아이디: 404
      // 나 자신: 400
      if (result) {
        setNotiText(result.message);
        setErrorText("");
        setIsFriend(true);
      } else {
        setErrorText("해당 닉네임은 존재하지 않습니다.");
        setNotiText("");
        setIsFriend(true);
      }
    }
  };

  return (
    <>
      <A.FriendProfileContainer>
        <A.ImgContainer>
          <A.Img src={ProfilePng} alt={"profile"} />
        </A.ImgContainer>
        <A.InfoText>
          <A.InfoSpan>{state.targetNickname}</A.InfoSpan>님께서
          <br />
          친구 추가하셨습니다.
        </A.InfoText>
        {notiText && <A.NotiText>{notiText}</A.NotiText>}
        {errorText && <A.ErrorText>{errorText}</A.ErrorText>}
      </A.FriendProfileContainer>
      <A.SubmitButton onClick={fetchAddFriend} $isFriend={isFriend}>
        나도 친구 추가하기
      </A.SubmitButton>
    </>
  );
}

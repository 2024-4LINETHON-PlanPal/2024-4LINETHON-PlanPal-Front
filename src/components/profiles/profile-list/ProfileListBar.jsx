import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as A from "components/profiles/profile-list/ProfileListBar.Style";
import LogoPng from "assets/common/logo-mini-35x46.png";
import PlusIconPng from "assets/common/plus-icon-30x30.png";
import ProfileComponent from "components/profiles/profile-list/ProfileComponent";
import ModalBase from "components/modal/ModalBase";
import AddFriend from "components/modal/profile/AddFriend";
import { getFriendsProfile } from "apis/getFriendsProfile";
import AcceptFriend from "components/modal/profile/AcceptFriend";
import ModalBaseOnClick from "components/modal/ModalBaseOnClick";

export default function ProfileListBar() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();
  const [toggleModal, setToggleModal] = useState(false);
  const [friendsList, setFriendsList] = useState({});

  // api 연결
  useEffect(() => {
    const username = localStorage.getItem("username");
    // console.log("localStorage - username : ", username);
    // console.log(localStorage.length);
    // localStorage.clear();

    const fetchMyProfileData = async () => {
      const result = await getFriendsProfile(username);
      // console.log("친구 프로필 api: ", result);
      setFriendsList(result);
    };
    fetchMyProfileData(username);
  }, [toggleModal, state?.toggleAcceptFriendModal]);

  // 친구 신청 받기 모달 닫기
  const handleAcceptFriendModal = () => {
    navigate("/home", { replace: true });
  };

  return (
    <A.BarContainer>
      <A.LogoImgContainer>
        <A.LogoImg src={LogoPng} alt="PlanPal" />
      </A.LogoImgContainer>

      <A.ProfileListContainer>
        {/* 슬라이드 - 동적 적용 필요 */}
        {friendsList.result && friendsList.result.length > 0 ? (
          friendsList.result.map((friend) => <ProfileComponent key={friend.id} nickname={friend.nickname} />)
        ) : (
          <A.NoFriendText>오른쪽 버튼을 눌러 친구 추가를 해보아요!</A.NoFriendText>
        )}
        {/* <ProfileComponent nickname={"박스"} />
        <ProfileComponent />
        <ProfileComponent nickname={"닉네임닉네임"} />
        <ProfileComponent nickname={"닉닉네임"} />
        <ProfileComponent /> */}
      </A.ProfileListContainer>

      <A.IconContainer onClick={() => setToggleModal(true)}>
        <A.Img src={PlusIconPng} alt="PlanPal" />
      </A.IconContainer>

      {/* 친구 추가 모달 */}
      {toggleModal && (
        <ModalBase
          setCloseModal={setToggleModal}
          InsideComponent={AddFriend}
          modalCategoryText="친구 추가"
          modalIntroduceText="플랜팔을 함께할 친구를"
          modalIntroduceText2="찾아보세요"
          modalHeight="42.8rem"
        />
      )}

      {/* 친구 신청 받기 모달 */}
      {state?.toggleAcceptFriendModal && (
        <ModalBaseOnClick
          setCloseModal={handleAcceptFriendModal}
          InsideComponent={AcceptFriend}
          modalCategoryText="친구 추가"
          modalHeight="42.8rem"
        />
      )}
    </A.BarContainer>
  );
}

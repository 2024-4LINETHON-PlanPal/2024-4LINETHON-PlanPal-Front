import { useState } from "react";
import * as A from "components/profiles/profile-list/ProfileListBar.Style";
import LogoPng from "assets/common/logo-mini-35x46.png";
import PlusIconPng from "assets/common/plus-icon-30x30.png";
import ProfileComponent from "components/profiles/profile-list/ProfileComponent";
import ModalBase from "components/modal/ModalBase";
import AddFriend from "components/modal/profile/AddFriend";

export default function ProfileListBar() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <A.BarContainer>
      <A.LogoImgContainer>
        <A.LogoImg src={LogoPng} alt="PlanPal" />
      </A.LogoImgContainer>

      <A.ProfileListContainer>
        {/* map 함수 */}
        {/* 슬라이드 - 동적 적용 필요 */}
        <ProfileComponent nickname={"닉네임"} />
        <ProfileComponent nickname={"박스"} />
        <ProfileComponent />
        <ProfileComponent nickname={"닉네임닉네임"} />
        <ProfileComponent nickname={"닉닉네임"} />
        <ProfileComponent />
      </A.ProfileListContainer>

      <A.IconContainer onClick={() => setToggleModal(true)}>
        <A.Img src={PlusIconPng} alt="PlanPal" />
      </A.IconContainer>

      {toggleModal && (
        <ModalBase
          setCloseModal={setToggleModal}
          InsideComponent={AddFriend}
          modalCategoryText="친구 추가"
          modalIntroduceText="플랜팔을 함께할 친구를"
          modalIntroduceText2="찾아보세요"
          bigSingleBtnText="친구 추가하기"
          modalHeight="42.8rem"
        />
      )}
    </A.BarContainer>
  );
}

import * as A from "components/profiles/profile-list/ProfileListBar.Style.jsx";
import LogoPng from "assets/common/logo-mini-35x46.png";
import PlusIconPng from "assets/common/plus-icon-30x30.png";
import ProfileComponent from "components/profiles/profile-list/ProfileComponent";

export default function ProfileListBar() {
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

      <A.IconContainer>
        <A.Img src={PlusIconPng} alt="PlanPal" />
      </A.IconContainer>
    </A.BarContainer>
  );
}

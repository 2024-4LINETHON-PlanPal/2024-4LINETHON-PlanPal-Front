import * as A from "components/profiles/profile-list/ProfileListBar.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import DefaultProfile09PNG from "assets/common/default-profile-6star-45x45.png";
import DefaultProfile08PNG from "assets/common/default-profile-8star-45x45.png";
import DefaultProfile12PNG from "assets/common/default-profile-12star-45x45.png";

export default function ProfileComponent({ nickname = "(알수없음)" }) {
  return (
    <A.ProfileItem>
      <A.ImgContainer>
        <A.LogoImg src={DefaultProfile04PNG} alt="PlanPal" />
      </A.ImgContainer>
      <A.ProfileName>{nickname}</A.ProfileName>
    </A.ProfileItem>
  );
}

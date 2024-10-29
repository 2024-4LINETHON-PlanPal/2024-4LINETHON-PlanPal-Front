import { useState } from "react";
import * as A from "components/profiles/my-profile/MyProfileBar.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import ModalBase from "components/modal/ModalBase";
import MyProfileInfo from "components/modal/MyProfileInfo";

export default function MyProfileBar() {
  const [toggleModal, setToggleModal] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOn(!isModalOn);
  // };

  return (
    <>
      <A.BarContainer onClick={() => setToggleModal(true)}>
        <A.ImgContainer>
          <A.Img src={DefaultProfile04PNG} alt="PlanPal" />
        </A.ImgContainer>

        <A.ProfileInfoContainer>
          <A.ProfileName>내 닉네임</A.ProfileName>
          <A.ProfileIntroduce>한줄소개</A.ProfileIntroduce>
        </A.ProfileInfoContainer>
      </A.BarContainer>

      {toggleModal && <ModalBase setCloseModal={setToggleModal} InsideComponent={MyProfileInfo} />}
    </>
  );
}

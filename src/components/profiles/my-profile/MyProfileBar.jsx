import { useState } from "react";
import * as A from "components/profiles/my-profile/MyProfileBar.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import ModalBase from "components/modal/ModalBase";
import MyProfileInfo from "components/modal/profile/MyProfileInfo";

export default function MyProfileBar() {
  const [toggleModal, setToggleModal] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOn(!isModalOn);
  // };

  // username(아이디) 가져오기
  // const username = localStorage.getItem("username");
  // console.log("localStorage - username : ", username); // "planpal123"
  // console.log(localStorage.length);
  // localStorage.clear();

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

      {toggleModal && (
        <ModalBase
          setCloseModal={setToggleModal}
          InsideComponent={MyProfileInfo}
          modalCategoryText="내 정보"
          modalIntroduceText="내 정보를 확인해보세요"
          tripleBtnText1="수정완료"
          modalHeight="40.8rem"
        />
      )}
      {/* <ModalBase
        setCloseModal={setToggleModal}
        InsideComponent={MyProfileInfo}
        modalCategoryText="[필수]modalCategoryText"
        modalIntroduceText="modalIntroduceText"
        tripleBtnText1="tripleBtnText1"
        tripleBtnText3="tripleBtnText3"
        tripleBtnText2="tripleBtnText2"
        doubleBtnText1="doubleBtnText1"
        doubleBtnText2="doubleBtnText2"
        longSingleBtnText1="longSingleBtnText1"
        longSingleBtnText2="longSingleBtnText2"
        bigSingleBtnText="bigSingleBtnText"
        modalHeight="51rem"
      /> */}
    </>
  );
}

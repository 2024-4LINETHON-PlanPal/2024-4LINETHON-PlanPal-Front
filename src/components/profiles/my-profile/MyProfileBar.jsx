import { useEffect, useState } from "react";
import * as A from "components/profiles/my-profile/MyProfileBar.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import ModalBase from "components/modal/ModalBase";
import MyProfileInfo from "components/modal/profile/MyProfileInfo";
import { getMyProfile } from "apis/getMyProfile";
import axios from "axios";

export default function MyProfileBar() {
  const [toggleModal, setToggleModal] = useState(false);

  // const toggleModal = () => {
  //   setIsModalOn(!isModalOn);
  // };

  // api 연결
  // api 연결
  // api 연결
  const getMyProfileData = async (username) => {
    const { result } = await getMyProfile(username);
    console.log("내 프로필 api: ", result);
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log("localStorage - username : ", username); // "planpal123"
    // console.log(localStorage.length);
    // localStorage.clear();

    getMyProfileData(username);
  }, []);

  // api 연결
  // api 연결
  // api 연결
  // const api = axios.create({
  //   baseURL: "https://planpal.kro.kr/",
  // });

  // const username = localStorage.getItem("username");
  // console.log("localStorage - username : ", username);

  // useEffect(() => {
  //   async function profileUser() {
  //     try {
  //       const response = await api.get(`users/profile/${username}/`);

  //       console.log("api 연결 성공:", response.data);
  //       return true;
  //     } catch (error) {
  //       console.error("api 연결 실패:", error.response?.data || error.message);
  //       return false;
  //     }
  //   }
  //   profileUser();
  // }, []);

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

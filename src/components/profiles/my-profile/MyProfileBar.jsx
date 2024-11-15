import { useEffect, useState } from "react";
import * as A from "components/profiles/my-profile/MyProfileBar.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import ModalBase from "components/modal/ModalBase";
import MyProfileInfo from "components/modal/profile/MyProfileInfo";
import { getMyProfile } from "apis/getMyProfile";

export default function MyProfileBar() {
  const [toggleModal, setToggleModal] = useState(false);
  const [userProfileData, setUserProfileData] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  // const toggleModal = () => {
  //   setIsModalOn(!isModalOn);
  // };

  // api 연결
  useEffect(() => {
    const username = localStorage.getItem("username");
    // console.log("localStorage - username : ", username);
    // console.log(localStorage.length);
    // localStorage.clear();

    const fetchMyProfileData = async () => {
      const result = await getMyProfile(username);
      console.log("내 프로필 api: ", result); //
      setUserProfileData(result);

      // http://3.107.196.3:8080/media/default.png
      const url = result.image;
      url && setImageUrl(`https://4line-planpal.netlify.app/media${url.split("/media")[1]}`);
    };
    fetchMyProfileData(username);
  }, [toggleModal]);

  useEffect(() => {
    console.log("imageUrl: ", imageUrl); //
  }, [imageUrl]);

  return (
    <>
      <A.BarContainer onClick={() => setToggleModal(true)}>
        <A.ImgContainer>
          <A.Img src={imageUrl} alt="profile" />
        </A.ImgContainer>

        <A.ProfileInfoContainer>
          <A.ProfileName>{userProfileData.nickname}</A.ProfileName>
          <A.ProfileIntroduce>{userProfileData.intro}</A.ProfileIntroduce>
        </A.ProfileInfoContainer>
      </A.BarContainer>

      {toggleModal && (
        <ModalBase
          setCloseModal={setToggleModal}
          InsideComponent={() => (
            <MyProfileInfo userProfileData={userProfileData} setToggleModal={setToggleModal} />
          )}
          modalCategoryText="내 정보"
          modalIntroduceText="내 정보를 확인해보세요"
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

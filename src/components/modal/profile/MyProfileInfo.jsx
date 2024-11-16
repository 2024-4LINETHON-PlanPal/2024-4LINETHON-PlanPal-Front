import * as A from "components/modal/profile/MyProfileInfo.Style";
import DefaultProfile04PNG from "assets/common/default-profile-4star-45x45.png";
import { useEffect, useState } from "react";
import { patchMyProfile } from "apis/patchMyProfile";

export default function MyProfileInfo({ userProfileData, setToggleModal }) {
  const [checkFirstRender, setCheckFirstRender] = useState(false);
  const [myProfileData, setMyProfileData] = useState(userProfileData);
  const [inputNickname, setInputNickname] = useState(myProfileData.nickname);
  const [inputIntro, setInputIntro] = useState(myProfileData.intro);

  // 제출
  const handleSubmitButton = () => {
    setMyProfileData({
      image: undefined,
      nickname: inputNickname ? inputNickname : undefined,
      intro: inputIntro ? inputIntro : undefined,
    });
    setCheckFirstRender(true);
  };

  // api 연결
  const username = localStorage.getItem("username");

  const fetchModifyMyProfile = async () => {
    const result = await patchMyProfile(username, myProfileData);
    // console.log("프로필수정 api: ", result); //
  };

  useEffect(() => {
    if (checkFirstRender) {
      // console.log("전송한 프로필 api: ", myProfileData); //
      fetchModifyMyProfile();
      setToggleModal(false);
    }
  }, [myProfileData]);

  return (
    <>
      <A.HorizontalContainer>
        <A.ImgContainer>
          <A.Img src={DefaultProfile04PNG} alt="프로필 사진" />
        </A.ImgContainer>

        <A.VerticalContainer1>
          <A.InputTitle>닉네임</A.InputTitle>
          <A.InputBox1
            value={inputNickname}
            onChange={(e) => setInputNickname(e.target.value)}
            placeholder={myProfileData.nickname}
          />
        </A.VerticalContainer1>
      </A.HorizontalContainer>

      <A.VerticalContainer2>
        <A.InputTitle>한 줄 소개</A.InputTitle>
        <A.InputBox2 value={inputIntro} onChange={(e) => setInputIntro(e.target.value)} placeholder={"플랜팔 짱"} />
      </A.VerticalContainer2>

      <A.ModalHorizontalButtonContainer onClick={handleSubmitButton}>
        <A.TripleButton1>수정완료</A.TripleButton1>
      </A.ModalHorizontalButtonContainer>
    </>
  );
}

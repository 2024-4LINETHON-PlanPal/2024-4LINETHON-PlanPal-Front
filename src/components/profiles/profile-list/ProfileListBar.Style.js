import { styled } from "styled-components";
import font from "styles/font";

export const BarContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 8.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 로고
export const LogoImgContainer = styled.div`
  margin: 0 1.2rem 0 2.8rem;
  padding: 0;

  width: 3.5rem;
  height: 4.6rem;

  border: none;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain; //cover
`;

// 프로필 리스트
export const ProfileListContainer = styled.ul`
  padding: 0;
  width: calc(100% - 7.5rem - 7rem);
  height: 8.8rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;
export const ProfileItem = styled.li`
  margin: 0.7rem 0.3rem 0 0.3rem;
  padding: 0;
  width: 5.1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const ImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 4.5rem;
  height: 4.5rem;

  border: none;
  border-radius: 50%;
  overflow: hidden;

  cursor: pointer;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const ProfileName = styled.p`
  margin-top: 0.4rem;
  width: 5.1rem;

  text-align: center;

  ${() => font.regular_12};

  white-space: nowrap; /* 한 줄로 표시 */
  overflow: hidden; /* 넘치는 부분 숨기기 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
`;

// 플러스 버튼
export const IconContainer = styled.div`
  margin: 0 2.8rem 0 1.2rem;
  padding: 0;

  width: 3rem;
  height: 3rem;

  border: none;
  border-radius: 50%;

  cursor: pointer;
`;

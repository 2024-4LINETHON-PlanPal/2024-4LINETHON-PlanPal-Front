import { styled } from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const TopBarContainer = styled.div`
  position: sticky;
  width: 100%;
  height: 9.6rem;
`;
export const TopBar = styled.div`
  margin-top: 0.8rem;
  width: 100%;
  height: 4.8rem;

  text-align: center;
  line-height: 4.8rem;
  ${font.extrabold_20}
`;
export const SubBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubBar = styled.div`
  width: 12.5rem;
  height: 4rem;

  border-bottom: none;
  border-bottom: ${(props) => (props.isSelected ? `2px solid ${color.grayscale_bc}` : "none")};

  text-align: center;
  line-height: 4rem;
  ${font.extrabold_15}

  cursor: pointer;
`;

// 알림 컴포넌트
export const NotiCompContainer = styled.div`
  padding: 2rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  :hover{
    cursor: pointer;
  }

  border-bottom: 1px solid ${color.grayscale_d9};
  /* cursor: pointer; */
`;
export const ImgContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;
export const Img = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  object-fit: cover;
`;
export const TextContainer = styled.div`
  margin-left: 1.2rem;
`;
export const NotiTitleText = styled.p`
  ${font.bold_15}
`;
export const NotiInfoText = styled.p`
  ${font.regular_15}
  color: ${color.grayscale_8c};
`;

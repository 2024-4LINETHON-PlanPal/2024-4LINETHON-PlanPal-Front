import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const BackgroundBlack = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: ${() => color.grayscale_58percent};

  z-index: 99;
`;
export const ModalContainer = styled.div`
  position: fixed;
  left: calc(50% - 16.8rem);
  top: calc(50% - 20.1rem);

  padding: 2.4rem;
  width: 33.6rem;

  border-radius: 20px;
  background-color: ${() => color.grayscale_f6};

  z-index: 100;
`;
// 모달 탑바
export const ModalTopbarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const ModalCategory = styled.p`
  padding: 0.8rem 2rem 0.7rem 2rem;

  border-radius: 1.7rem;
  background-color: ${() => color.grayscale_d9};

  ${() => font.bold_15};
`;
export const ImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 3rem;
  height: 3rem;

  border: none;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
export const ModalIntroduce = styled.p`
  margin-top: 1.1rem;
  ${() => font.bold_20};
`;
export const ModalButtonBase = styled.button`
  box-sizing: border-box;
  width: 9rem;
  height: 4rem;

  border: none;
  border-radius: 1.5rem;

  ${() => font.medium_18};
  color: ${() => color.primary_white};

  cursor: pointer;
`;

// 모달 버튼 - 가로
// 모달 버튼 - 가로
// 모달 버튼 - 가로
export const ModalHorizontalButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
// 가로 - 트리플
export const TripleButton1 = styled(ModalButtonBase)`
  margin-left: 0.9rem;
  background-color: ${() => color.primary_black};
`;
export const TripleButton2 = styled(ModalButtonBase)`
  margin-left: 0.9rem;
  background-color: ${() => color.grayscale_f6};
  border: 0.1rem solid ${() => color.primary_black};

  color: ${() => color.primary_black};
`;
export const TripleButton3 = styled(ModalButtonBase)`
  background-color: ${() => color.orange_nomal};
`;
// 가로 - 더블
export const DoubleButton1 = styled(ModalButtonBase)`
  margin-left: 0.8rem;
  width: 14rem;

  background-color: ${() => color.primary_black};
`;
export const DoubleButton2 = styled(ModalButtonBase)`
  width: 14rem;

  background-color: ${() => color.grayscale_f6};
  border: 0.1rem solid ${() => color.primary_black};

  color: ${() => color.primary_black};
`;
// 모달 버튼 - 세로
// 모달 버튼 - 세로
// 모달 버튼 - 세로
export const ModalVerticalButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LongSingleButton1 = styled(ModalButtonBase)`
  width: 28.8rem;

  background-color: ${() => color.primary_black};
`;
export const LongSingleButton2 = styled(ModalButtonBase)`
  margin-top: 1.1rem;
  width: 28.8rem;

  background-color: ${() => color.primary_black};
`;
export const BigSingleButton = styled(ModalButtonBase)`
  width: 28.8rem;
  height: 5.4rem;

  background-color: ${() => color.primary_black};
`;

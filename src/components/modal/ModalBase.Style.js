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
// 모달 버튼
export const ModalTripleButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const ModalButton1 = styled.button`
  padding: 0.8rem 2rem 0.7rem 2rem;

  border-radius: 1.7rem;
  background-color: ${() => color.grayscale_d9};

  ${() => font.bold_15};
  cursor: pointer;
`;
// double
// single

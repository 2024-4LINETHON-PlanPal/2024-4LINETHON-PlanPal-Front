import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

// Sign-up
export const IconImgContainer = styled.div`
  margin: 5.8rem 0 2.4rem 2.4rem;
  width: 3rem;
  height: 3rem;

  border: none;

  cursor: pointer;
`;
export const IconImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const ButtonContainer = styled.div`
  margin: 0;
  width: 100%;
  position: fixed;
  bottom: 3.4rem;

  display: flex;
  justify-content: center;
`;
export const ComponentContainer = styled.div`
  margin: 2.2rem 2.8rem 0 2.8rem;
`;
// SignStartEnd
export const LogoImgContainer = styled.div`
  margin-bottom: 1.2rem;
  width: 4.1rem;
  height: 5.4rem;

  border: none;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;
export const TitleText = styled.h2`
  padding-top: 2.3rem;
  ${() => font.bold_40}
`;
export const SubtitleText = styled.p`
  margin-top: 1.8rem;
  ${() => font.medium_20}
  color: ${() => color.grayscale_bc};
`;
// SignStep
export const CategoryChip = styled.p`
  display: inline-flex;
  padding: 0.7rem 2rem;

  background-color: ${() => color.primary_black};
  background-color: ${() => color.grayscale_bc};
  border-radius: 1.8rem;

  ${() => font.bold_15}
  color: ${() => color.primary_black};
  color: ${() => color.primary_white};
`;
export const InputText = styled.input`
  margin-top: 6.8rem;
  padding: 0;
  width: 33.4rem;

  background-color: transparent;
  border: none;

  ${() => font.bold_40}
  color: ${() => color.orange_normal};

  &::placeholder {
    color: ${() => color.grayscale_bc};
  }
`;

import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoImgContainer = styled.div`
  margin: 6vh 0 9.8vh 0;
  width: 8.8rem;
  height: 10.6rem;

  border: none;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const FormContainer = styled.form`
  margin-bottom: 1.7rem;
`;
export const InputTitle = styled.p`
  margin: 2.8rem 0.8rem 0.8rem 0.8rem;
  ${() => font.bold_15}
`;
export const InputBox = styled.input`
  padding: 1.8rem 2rem;
  width: 32.1rem;
  height: 5.4rem;

  border: 1px solid ${color.grayscale_bc};
  border-radius: 1rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;

  ${() => font.regular_15}

  &::placeholder {
    color: ${() => color.grayscale_bc};
  }
`;
export const ErrorText = styled.p`
  margin: 0.8rem 0.8rem 8.6rem 0.8rem;
  height: 1.6rem;
  color: ${() => color.orange_normal};
  ${font.regular_12}
`;

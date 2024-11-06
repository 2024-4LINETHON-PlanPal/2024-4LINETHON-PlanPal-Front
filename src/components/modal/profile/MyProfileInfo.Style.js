import { styled } from "styled-components";
import color from "styles/color";
import font from "styles/font";

export const HorizontalContainer = styled.div`
  margin-top: 3.5rem;

  display: flex;
`;
export const ImgContainer = styled.div`
  margin-right: 1.2rem;
  padding: 0;
  width: 8.2rem;
  height: 8.2rem;

  border: 1px solid ${color.grayscale_d9};
  border-radius: 50%;

  overflow: hidden;
  cursor: pointer;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const VerticalContainer1 = styled.div`
  padding-top: 0.8rem;

  display: flex;
  flex-direction: column;
`;
export const VerticalContainer2 = styled.div`
  margin: 1.6rem 0 5rem 0;

  display: flex;
  flex-direction: column;
`;
export const InputTitle = styled.p`
  ${() => font.bold_15};
`;
export const InputBox1 = styled.input`
  margin-top: 1rem;
  padding: 1rem 1.4rem;
  width: 19.2rem;
  height: 3.5rem;

  border: 1px solid ${color.grayscale_bc};
  border-radius: 1.8rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05) inset;
  background-color: transparent;

  ${() => font.regular_12}

  &::placeholder {
    color: ${() => color.grayscale_bc};
  }
`;
export const InputBox2 = styled(InputBox1)`
  width: 28.8rem;
`;

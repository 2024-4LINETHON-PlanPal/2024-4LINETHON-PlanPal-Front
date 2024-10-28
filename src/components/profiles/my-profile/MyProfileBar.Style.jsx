import { styled } from "styled-components";
import font from "styles/font";

export const BarContainer = styled.div`
  margin: 1rem 2.4rem 0 2.4rem;
  padding: 0;
  max-width: calc(100% - 2.4rem - 2.4rem);
  height: 5.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;
`;

export const ImgContainer = styled.div`
  margin: 0;
  padding: 0;

  width: 5.5rem;
  height: 5.5rem;

  border: none;
  border-radius: 50%;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const ProfileInfoContainer = styled.div`
  padding: 0 2.6rem 0 1.3rem;
  height: 5.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const ProfileName = styled.p`
  text-align: center;

  ${() => font.bold_15};
`;
export const ProfileIntroduce = styled.p`
  margin-top: 0.3rem;

  text-align: center;

  ${() => font.regular_12};
`;

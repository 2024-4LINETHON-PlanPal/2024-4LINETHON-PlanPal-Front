import { styled } from "styled-components";
import font from "../../styles/font";
import color from "../../styles/color";

export const BarContainer = styled.div`
  margin: 0;
  /* padding: 0.4rem 4.2rem; */
  padding: 0.4rem calc(10vw + 0.3rem);
  width: 100%;
  height: 6.9rem;

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  z-index: 9;
`;
export const NavBtn = styled.div`
  padding: 0.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;
export const ImgContainer = styled.div`
  margin-bottom: 0.3rem;
  padding: 0;

  width: 3rem;
  height: 3rem;

  border: none;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
export const NavText = styled.p`
  text-align: center;

  ${() => font.regular_10};

  color: ${(props) => (props.selected ? () => color.black : () => color.grayscale_bc)};
`;

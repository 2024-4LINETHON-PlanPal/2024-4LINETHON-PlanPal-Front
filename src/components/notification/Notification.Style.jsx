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

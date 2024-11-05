import { styled } from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const PromiseWrapper = styled.div`
    padding: 25px 0px;
`;

export const SubTitle = styled.p`
    ${font.bold_15};
    margin-bottom: 5px;
    margin-top: 25px;
`;

export const BoldInput = styled.input`
    width: 100%;
    ${font.extrabold_20};
    color: ${(props) => (props.isPlaceholder ? color.grayscale_bc : color.primary_black)};
    border: none;
    outline: none;
    background: none;

    &::placeholder {
        color: ${color.grayscale_bc};
    }
`;

export const OvalInput = styled.input`
    width: 100%;
    height: 32px;
    padding: 9px 20px;
    border: 1px solid ${color.grayscale_bc};
    border-radius: 50px;
    ${font.regular_12};

    &::placeholder {
        color: ${color.grayscale_bc};
    }
`;

export const FriendInputWrapper = styled.div`
    display: flex;
    gap: 7px;
`;

export const DateAndTimeWrapper = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
`;

export const TimeLengthWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TimeLength = styled.input`
    width: 30px;
    ${font.extrabold_20};
    color: ${(props) => (props.isPlaceholder ? color.grayscale_bc : color.primary_black)};
    border: none;
    outline: none;
    background: none;

    &::placeholder {
        color: ${color.grayscale_bc};
    }
`;

export const SpanText15 = styled.span`
    ${font.medium_15};
    color: ${color.grayscale_bc}

`

export const ArrowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: 5px;
`;

export const ArrowButton = styled.button`
    width: 16px;
    height: 12px;
    background-color: ${color.grayscale_bc};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;

    img {
        width: 9px;
    }

    &:hover {
        background-color: ${color.primary_black};
    }
`;

export const MemberDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 20px;
    border-radius: 50px;
    padding: 13px 10px;
    color: ${color.primary_black};
    background-color: ${color.grayscale_d9};
    ${font.regular_12};
`

export const MembersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

export const MemoTextarea = styled.textarea`
    width: 100%;
    height: 110px;
    padding: 10px;
    resize: none;
    border: 1px solid ${color.grayscale_bc};
    border-radius: 10px;
    outline: none;
    margin-bottom: 20px;
    ${font.regular_12};
    color: ${color.primary_black};
    background-color: ${color.primary_white};
`

export const Black23text = styled.p`
    color: ${color.primary_white};
    ${font.black_23};
    margin-bottom: 2px;
`

export const Light20text = styled.p`
    color: ${color.primary_white};
    ${font.light_20};
    margin-bottom: 20px;
`
export const Medium13text = styled.p`
    color: ${color.primary_white};
    ${font.medium_12};
    margin-bottom: 5px;
`
export const TimeSuggestionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;

    ::-webkit-scrollbar {
        display: none;
    }
`
export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? color.primary_black : color.grayscale_d9)};
`;

export const HorizontalDiv = styled.div`
    display: flex;
    align-items: center;
    ${font.medium_15};
    color: ${color.primary_black};
    position: relative;
`;

export const QuestionIcon = styled.img`
    cursor: pointer;

    margin: 25px 0px 5px 5px;
`

export const Tooltip = styled.div`
    position: absolute;
    top: 24px;
    right: 10px;
    background-color: ${color.primary_white};
    color: ${color.primary_black};
    ${font.regular_12}
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    white-space: pre-line;
    z-index: 1;
`;
import { styled } from "styled-components";
import font from "styles/font";
import color from "styles/color";

export const PromiseWrapper = styled.div`
    padding: 25px 0px;
`;

export const SubTitle = styled.p`
    ${font.bold_15};
    margin-bottom: 5px;
    margin-top: 10px;
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

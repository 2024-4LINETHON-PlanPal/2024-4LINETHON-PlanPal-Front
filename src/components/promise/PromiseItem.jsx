import React, { useState } from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

import staroff from "assets/promise/star-icon-off.svg";
import staron from "assets/promise/star-icon-on.svg";

const ItemDiv = styled.div`
    width: 150px;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
    background-color: ${color.grayscale_eb};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`;

const StarIcon = styled.img`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const ItemTitle = styled.p`
    ${font.black_18};
    margin-top: 10px;
    margin-bottom: 5px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

const ItemStrongText = styled.span`
    ${font.bold_15};
`;

const ItemText = styled.span`
    ${font.regular_15};
`;

const ItemMemo = styled.div`
    width: 130px;
    height: 50px;
    padding: 7px 10px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: ${color.primary_white};
    ${font.regular_12};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 10px;
`;

const ItemBtn = styled.button`
    padding: 5px 13px;
    border-radius: 50px;
    color: ${color.white};
    background-color: ${color.primary_black};
    ${font.medium_12};
`;

export default function PromiseItem() {
    const [isStarred, setIsStarred] = useState(false);

    const handleStarClick = () => {
        setIsStarred((prev) => !prev);
    };

    return (
        <ItemDiv>
            <StarIcon
                src={isStarred ? staron : staroff}
                alt="star icon"
                onClick={handleStarClick}
            />
            <ItemInfo>
                <ItemTitle>여기톤 모여</ItemTitle>
                <div>
                    <ItemStrongText>수진</ItemStrongText>
                    <ItemText> 외 3인</ItemText>
                </div>
                <ItemText>2024. 10. 19. 22시</ItemText>
            </ItemInfo>
            <ItemMemo>숙대입구역</ItemMemo>
            <ButtonContainer>
                <ItemBtn>공유</ItemBtn>
                <ItemBtn>수정</ItemBtn>
            </ButtonContainer>
        </ItemDiv>
    );
}

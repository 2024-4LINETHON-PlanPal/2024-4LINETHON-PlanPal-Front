import React from "react";
import styled from "styled-components";
import font from "styles/font";
import color from "styles/color";

const MakingWrapper = styled.div`
    position: fixed;
    bottom: 70px;
    width: calc(100% - 50px);
    left: 50%;
    transform: translateX(-50%);
    background-color: ${color.primary_white};
`;

const MakingBtn = styled.button`
    width: 100%;
    text-align: center;
    border-radius: 15px;
    color: ${color.primary_white};
    background-color: ${color.primary_black};
    ${font.medium_20};
    padding: 15px;
    cursor: pointer;
`;

export default function PromiseBtn({ onClick }) {
  return (
    <MakingWrapper>
      <MakingBtn onClick={onClick}>약속시간 탐색하기</MakingBtn>
    </MakingWrapper>
  );
}

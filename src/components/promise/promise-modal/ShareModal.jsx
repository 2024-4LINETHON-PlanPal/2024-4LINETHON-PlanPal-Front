import React from 'react';
import styled from 'styled-components';
import font from 'styles/font';
import color from 'styles/color';

const ShareContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
const ShareBtn = styled.button`
    width: 165px;
    height: 40px;
    border-radius: 15px;
    border: none;
    ${font.medium_15}
    background-color: #FAE100;
    color: ${color.primary_black};

    black {
        color: ${color.primary_white};
        background-color: ${color.primary_black};
    }
`

export default function ShareModal() {
  return (
    <ShareContainer>
        <ShareBtn>카카오톡 공유하기</ShareBtn>
        <ShareBtn style={{color: color.primary_white, backgroundColor: color.primary_black}}>링크 공유하기</ShareBtn>
    </ShareContainer>
  );
}

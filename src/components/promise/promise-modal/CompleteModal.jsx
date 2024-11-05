import React, { useState, useRef } from "react";
import color from "styles/color";
import font from "styles/font";
import styled from "styled-components";
import checkicon from "assets/promise/check-icon.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 150px 0px;
`
const Black23text = styled.p`
    color: ${color.primary_black};
    ${font.black_23};
    margin-top: 20px;
`
const Bold23text = styled.p`
    color: ${color.primary_black};
    ${font.bold_23};
    margin-top: 5px;
`

export default function CompleteModal() {


  return (
    <Wrapper>
        <img src={checkicon} style={{width: 50}}/>
        <Black23text>여기톤 모여</Black23text>
        <Bold23text>약속시간에 투표하셨습니다</Bold23text>
    </Wrapper>
  );
}

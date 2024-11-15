import React from "react";
import styled from "styled-components";
import * as P from "components/promise/PromiseStyle";
import PromiseTitle from "components/promise/element/PromiseTitle";
import closeicon from "assets/promise/close-icon.svg"

const MembersDiv = styled.div`
  width: 100%;  
  height: 50px;
`;

const IconImg = styled.img`
  width: 12px;;
  margin-left: 3px;
`


export default function ModifyModal() {
  return (
    <P.PromiseWrapper>
      <PromiseTitle/>
      <MembersDiv>
            <P.SubTitle>참여자</P.SubTitle>
            <P.MembersWrapper>
                <P.MemberDiv>수진 <IconImg src={closeicon}/> </P.MemberDiv>
                <P.MemberDiv>홍길동 <IconImg src={closeicon}/> </P.MemberDiv>
                <P.MemberDiv>바구현 <IconImg src={closeicon}/> </P.MemberDiv>
                <P.MemberDiv>정해인 <IconImg src={closeicon}/> </P.MemberDiv>
            </P.MembersWrapper>
        </MembersDiv>

      <P.SubTitle>일시</P.SubTitle>
      <P.BoldInputDiv>
        <input
          className="textfield"
          type="text"
          value="2024. 10. 19. 22시"
          readOnly
        />
      </P.BoldInputDiv>
      <P.SubTitle>메모</P.SubTitle>
      <P.MemoTextarea/>

    </P.PromiseWrapper>
  );
}

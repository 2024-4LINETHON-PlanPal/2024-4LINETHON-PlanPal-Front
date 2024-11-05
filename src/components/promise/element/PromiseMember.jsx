import React from "react";
import styled from "styled-components";
import * as P from "components/promise/promise-modal/PromiseStyle";
import color from "styles/color";
import font from "styles/font"

const MembersDiv = styled.div`
  width: 100%;  
  height: 50px;
`;

export default function PromiseMember() {
    return (
        <MembersDiv>
            <P.SubTitle>참여자</P.SubTitle>
            <P.MembersWrapper>
                <P.MemberDiv>수진</P.MemberDiv>
                <P.MemberDiv>홍길동</P.MemberDiv>
                <P.MemberDiv>바구현</P.MemberDiv>
                <P.MemberDiv>정해인</P.MemberDiv>
            </P.MembersWrapper>
        </MembersDiv>
    );
}

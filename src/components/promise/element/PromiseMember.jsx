import React from "react";
import styled from "styled-components";
import * as P from "components/promise/PromiseStyle";

const MembersDiv = styled.div`
  width: 100%;  
  height: 50px;
`;

export default function PromiseMember({ members }) {

    const memberList = members || [];

    return (
        <MembersDiv>
            <P.SubTitle>참여자</P.SubTitle>
            <P.MembersWrapper>
                {memberList.map((member, index) => (
                    <P.MemberDiv key={index}>{member.nickname}</P.MemberDiv>
                ))}
            </P.MembersWrapper>
        </MembersDiv>
    );
}

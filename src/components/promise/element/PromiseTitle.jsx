import React from "react";
import * as P from "components/promise/PromiseStyle";
import styled from "styled-components";

const TitleDiv = styled.div`
  width: 100%;  
  height: 50px;
`;

export default function PromiseTitle({ promiseName }) {
    return (
        <TitleDiv>
            <P.SubTitle>약속명</P.SubTitle>
            <P.BoldInputDiv>
                <input 
                    className="textfield"
                    type="text"
                    value={promiseName}
                    readOnly
                />
            </P.BoldInputDiv>
        </TitleDiv>
    );
}

import React from "react";
import * as P from "components/promise/promiseModal/PromiseStyle";

export default function Promise2({ title, friendSearch }) {
  return (
    <P.PromiseWrapper>

      <P.SubTitle>약속명</P.SubTitle>
      <P.BoldInput
        type="text"
        value={title}
        readOnly
      />
      
      <P.SubTitle>참여자</P.SubTitle>
      <P.OvalInput
        type="text"
        value={friendSearch}
        readOnly
      />

      <P.SubTitle>약속 시간 제안</P.SubTitle>


    </P.PromiseWrapper>
  );
}

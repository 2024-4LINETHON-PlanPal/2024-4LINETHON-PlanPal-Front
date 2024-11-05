import React from "react";
import * as P from "components/promise/promise-modal/PromiseStyle";
import PromiseTitle from "components/promise/element/PromiseTitle";
import PromiseMember from "components/promise/element/PromiseMember";

export default function ItemModal() {
  return (
    <P.PromiseWrapper>
      <PromiseTitle/>
      <PromiseMember/>

      <P.SubTitle>일시</P.SubTitle>
      <P.BoldInput
        type="text"
        value="2024. 10. 19. 22시"
        readOnly
      />

      <P.SubTitle>메모</P.SubTitle>
      <P.MemoTextarea/>

    </P.PromiseWrapper>
  );
}

import React from "react";
import * as P from "components/promise/PromiseStyle";
import PromiseTitle from "components/promise/element/PromiseTitle";
import PromiseMember from "components/promise/element/PromiseMember";

export default function ItemModal({ selectedPromise, onClose }) {
  if (!selectedPromise) return null;

  const { title, members, promise_options, memos } = selectedPromise;

  return (
    <P.PromiseWrapper>
      {/* 약속 제목 */}
      <PromiseTitle>{title || "제목 없음"}</PromiseTitle>

      {/* 멤버 정보 */}
      <PromiseMember>
        {members && members.length > 0
          ? members.map((member) => (
              <div key={member.id}>{member.name || "이름 없음"}</div>
            ))
          : "멤버 정보 없음"}
      </PromiseMember>

      {/* 일시 */}
      <P.SubTitle>일시</P.SubTitle>
      <P.BoldInputDiv>
        <input
          className="textfield"
          type="text"
          value={
            promise_options?.start || "2024. 10. 19. 22시"
          }
          readOnly
        />
      </P.BoldInputDiv>

      {/* 메모 */}
      <P.SubTitle>메모</P.SubTitle>
      <P.MemoTextarea
        defaultValue={memos || "메모 없음"}
        readOnly
      />
    </P.PromiseWrapper>
  );
}

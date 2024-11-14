import React, { useState, useRef } from "react";
import * as P from "components/promise/PromiseStyle";
import TimeSuggestion from "components/promise/element/TimeSuggestion";
import PromiseTitle from "components/promise/element/PromiseTitle";
import PromiseMember from "components/promise/element/PromiseMember";

export default function SuggestModal({ promiseName, members, responseData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeSuggestionWrapperRef = useRef(null);
  const limitedResponseData = responseData.slice(0, 5);

  const handleScroll = () => {
    const scrollLeft = timeSuggestionWrapperRef.current.scrollLeft;
    const suggestionWidth = 260;
    const index = Math.round(scrollLeft / suggestionWidth);
    setActiveIndex(index);
  };

  console.log("Response Data:", responseData);

  if (!responseData || responseData.length === 0) {
    return (
      <P.PromiseWrapper>
        <PromiseTitle promiseName={promiseName} />
        <PromiseMember members={members} />
        <P.SubTitle>약속 시간 제안</P.SubTitle>
        <p>제안된 시간이 없습니다.</p>
      </P.PromiseWrapper>
    );
  }

  return (
    <P.PromiseWrapper>
      <PromiseTitle promiseName={promiseName} />
      <PromiseMember members={members} />

      <P.SubTitle>약속 시간 제안</P.SubTitle>
      <P.TimeSuggestionWrapper ref={timeSuggestionWrapperRef} onScroll={handleScroll}>
        {limitedResponseData.map((item, index) => (
          <TimeSuggestion
            key={item.id}
            colorIndex={index}
            start={item.start}
            length={item.length}
            members={{
              all: item.members_can_attend.map((member) => member.nickname),
              voted: item.vote_members.map((member) => member.nickname),
            }}
            // isSelected={index === activeIndex}
            showVoteCount={item.vote_members.length > 0}
          />
        ))}
      </P.TimeSuggestionWrapper>

      <P.DotWrapper>
        {responseData && responseData.slice(0, 5).map((_, index) => (
          <P.Dot key={index} isActive={index === activeIndex} />
        ))}
      </P.DotWrapper>
    </P.PromiseWrapper>
  );
}

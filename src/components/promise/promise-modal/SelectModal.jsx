import React, { useState, useRef } from "react";
import * as P from "components/promise/PromiseStyle";
import TimeSuggestion from "../element/TimeSuggestion";
import PromiseTitle from "components/promise/element/PromiseTitle";
import PromiseMember from "components/promise/element/PromiseMember";

export default function SelectModal({ 
  promiseName, 
  members, 
  responseData, 
  selectedIndex, 
  setSelectedIndex, 
  setSelectedOptionId
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeSuggestionWrapperRef = useRef(null);

  const handleScroll = () => {
    const scrollLeft = timeSuggestionWrapperRef.current.scrollLeft;
    const suggestionWidth = 260;
    const index = Math.round(scrollLeft / suggestionWidth);
    setActiveIndex(index);
  };

  return (
    <P.PromiseWrapper>
      <PromiseTitle promiseName={promiseName} />
      <PromiseMember members={members} />

      <P.SubTitle>약속 시간 제안</P.SubTitle>
      <P.TimeSuggestionWrapper
        ref={timeSuggestionWrapperRef}
        onScroll={handleScroll}
      >
        {responseData && responseData.slice(0, 5).map((item, index) => (
          <TimeSuggestion
            key={item.id}
            colorIndex={index}
            start={item.start}
            length={item.length}
            members={{
              all: item.members_can_attend.map((member) => member.nickname),
              voted: item.vote_members.map((member) => member.nickname),
            }}
            onClick={() => {
              setSelectedIndex(index); // Update the selected index
              setSelectedOptionId(item.id); // Update the selected option ID
            }}
            isSelected={selectedIndex === index} // Check if this option is selected
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

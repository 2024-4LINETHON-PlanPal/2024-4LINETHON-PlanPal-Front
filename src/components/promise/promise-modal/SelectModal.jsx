import React, { useState, useRef } from "react";
import * as P from "components/promise/promise-modal/PromiseStyle";
import TimeSuggestion from "../element/TimeSuggestion";
import PromiseTitle from "components/promise/element/PromiseTitle";
import PromiseMember from "components/promise/element/PromiseMember";

export default function SelfModal({ title, selectedFriends }) {
  
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeSuggestionWrapperRef = useRef(null);

  const handleScroll = () => {
    const scrollLeft = timeSuggestionWrapperRef.current.scrollLeft;
    const suggestionWidth = 288 + 10; 
    const index = Math.round(scrollLeft / suggestionWidth);
    setActiveIndex(index);
  };

  return (
    <P.PromiseWrapper>

      <PromiseTitle/>
      <PromiseMember/>

      <P.SubTitle>약속 시간 제안</P.SubTitle>
      <P.TimeSuggestionWrapper
        ref={timeSuggestionWrapperRef}
        onScroll={handleScroll}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <TimeSuggestion
            key={index}
            colorIndex={index}
            onClick={() => setSelectedIndex(index)}
            isSelected={selectedIndex === index}
          />
        ))}
      </P.TimeSuggestionWrapper>

      <P.DotWrapper>
        {[0, 1, 2, 3, 4].map((index) => (
          <P.Dot key={index} isActive={index === activeIndex} />
        ))}
      </P.DotWrapper>
    </P.PromiseWrapper>
  );
}

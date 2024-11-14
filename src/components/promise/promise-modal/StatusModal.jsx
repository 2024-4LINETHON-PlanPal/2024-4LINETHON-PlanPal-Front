import React, { useState, useRef, useEffect } from "react";
import * as P from "components/promise/PromiseStyle";
import PromiseTitle from "components/promise/element/PromiseTitle";
import TimeSuggestion from "components/promise/element/TimeSuggestion";
import questionicon from "assets/promise/question-mark.svg"

export default function StatusModal({
    promiseName, 
    members, 
    responseData, 
    selectedIndex, 
    setSelectedIndex, 
    setSelectedOptionId
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const timeSuggestionWrapperRef = useRef(null);
    const tooltipRef = useRef(null);

    const handleScroll = () => {
    const scrollLeft = timeSuggestionWrapperRef.current.scrollLeft;
    const suggestionWidth = 288 + 10; 
    const index = Math.round(scrollLeft / suggestionWidth);
    setActiveIndex(index);
  };

  const handleIconClick = () => {
    setShowTooltip(!showTooltip); 
    };

    const handleClickOutside = (event) => {
        
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        if (showTooltip) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showTooltip]);

  return (
    <P.PromiseWrapper>
        <PromiseTitle promiseName={promiseName} />

        <P.SubTitle>약속 참여자</P.SubTitle>
        <P.MembersWrapper>
            <P.MemberDiv>수진</P.MemberDiv>
            <P.MemberDiv>홍길동</P.MemberDiv>
            <P.MemberDiv>바구현</P.MemberDiv>
            <P.MemberDiv>정해인</P.MemberDiv>
        </P.MembersWrapper>

        <P.SubTitle>투표 참여자</P.SubTitle>
        <P.MembersWrapper>
            <P.MemberDiv>수진</P.MemberDiv>
            <P.MemberDiv>홍길동</P.MemberDiv>
        </P.MembersWrapper>

        <P.HorizontalDiv>
            <P.SubTitle>약속시간 투표현황</P.SubTitle>
            <P.QuestionIcon src={questionicon} onClick={handleIconClick}/>
            {showTooltip && (
                <P.Tooltip ref={tooltipRef}>
                    투표가 동률일 경우<br />
                    1. 참여 가능 인원이 많은 순<br />
                    2. 약속 시간이 빠른 순<br />
                    으로 자체 결정하여 제안합니다.
                </P.Tooltip>
            )}
        </P.HorizontalDiv>
        
        <P.TimeSuggestionWrapper ref={timeSuggestionWrapperRef} onScroll={handleScroll}>
            {[0, 1, 2, 3, 4].map((index) => (
                <TimeSuggestion key={index} colorIndex={index} showVoteCount={true} />
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

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
            {responseData.members.map((member, index) => (
                <P.MemberDiv key={index}>{member.nickname}</P.MemberDiv>
            ))}
        </P.MembersWrapper>

        <P.SubTitle>투표 참여자</P.SubTitle>
        <P.MembersWrapper>
            {responseData.promise_options.vote_members.map((member, index) => (
                <P.MemberDiv key={index}>{member.nickname}</P.MemberDiv>
            ))}
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

        <P.TimeSuggestionWrapper
            ref={timeSuggestionWrapperRef}
            onScroll={handleScroll}>
            {responseData.promise_options.slice(0, 5).map((item, index) => (
            <TimeSuggestion
                key={item.id}
                colorIndex={index}
                start={item.start}
                length={item.length}
                members={{
                all: item.members_can_attend.map((member) => member.nickname),
                voted: item.vote_members.map((member) => member.nickname),
                }}
                isSelected={selectedIndex === index} 
                showVoteCount={true}
            />
            ))}
        </P.TimeSuggestionWrapper>

        <P.DotWrapper>
            {responseData.promise_options.slice(0, 5).map((_, index) => (
                <P.Dot key={index} isActive={index === activeIndex} />
            ))}
        </P.DotWrapper>

    </P.PromiseWrapper>
  );
}
